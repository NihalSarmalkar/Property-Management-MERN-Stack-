import { v4 as uuidV4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { useState, useEffect } from 'react';
import { realTimeFirestore, storage } from "../config/firebase.config";
import { collection as firestoreCollection, addDoc } from 'firebase/firestore';

export const useStorage = function (file, collection) {
   const [progress, setProgress] = useState(0);
   const [error, setError] = useState(null);
   const [url, setUrl] = useState(null);

   useEffect(function () {
      const path = [collection, file.name, "_", uuidV4()]

      const storageRef = ref(storage,  path.join(""));
      const collectionRef = firestoreCollection(realTimeFirestore, collection);

      const uploadTask = uploadBytesResumable(storageRef, file);
      
      uploadTask.on('state_changed', (snapshot) => {
         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         setProgress(progress);

         if (progress === 100) {
            const path = "https://firebasestorage.googleapis.com/v0/b/evencloud-26d32.appspot.com/o/" + encodeURI(snapshot.ref._location.path).replace(/\//g, "%2F") + "?alt=media";

            addDoc(collectionRef, {
               filename: snapshot.ref._location.path.replace(/.*\/(.*)_.*/g, "$1"),
               url: path,
            });
            
            console.log(path);
            setUrl(path);
         }
      }, setError,
      () => {});

   }, [file]);

   return {
      progress,
      error,
      url
   }
}