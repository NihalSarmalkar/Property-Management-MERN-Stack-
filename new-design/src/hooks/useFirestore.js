import { useState, useEffect } from 'react';
import { realTimeFirestore } from "../config/firebase.config";
import { collection as firestoreCollection, getDocs } from 'firebase/firestore';

export const useFirestore = function (collection) {
   const [docs, setDocs] = useState([]);

   useEffect(() => {
      const collectionRef = firestoreCollection(realTimeFirestore, collection)

      getDocs(collectionRef).then((snap) => {
         let documents = [];

         snap.forEach(function (document) {
            documents.push({
               ...document.data(),
               id: document.id
            });
         });

         setDocs(documents);
      })

      return () => unsub();
   }, [collection])


   return { docs };
}