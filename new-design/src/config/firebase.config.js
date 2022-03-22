import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore as getRealTimeFirestore } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
   apiKey: "AIzaSyBSEx2-ykPTb70keLZh3LAuDtQT2VyCsco",
   authDomain: "evencloud-26d32.firebaseapp.com",
   databaseURL: "https://evencloud-26d32.firebaseio.com",
   projectId: "evencloud-26d32",
   storageBucket: "evencloud-26d32.appspot.com",
   messagingSenderId: "599725599274",
   appId: "1:599725599274:web:8f9a716ca577fc72a1f153",
   measurementId: "G-VSJNQ5LYK5"
};

initializeApp(firebaseConfig);

export const firestore = getFirestore(),
   realTimeFirestore = getRealTimeFirestore(),
   storage = getStorage();