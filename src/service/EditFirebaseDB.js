import React from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, onSnapshot, collection, getDocs, query, limit } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

const firestore = getFirestore();

export const writeCheering = async (cheeringId, docData) => {
  const cheerItem = doc(firestore, `cheeringList/${cheeringId}`);
  try {
    await setDoc(cheerItem, docData, { merge: true });
    console.log('setDocSuccess');
  } catch (error) {
    console.log('setDocError', error);
  }
};

export const queryForDocument = async () => {
  const cheerChatQuery = query(collection(firestore, 'cheeringList'), limit(10));

  const querySnapShot = await getDocs(cheerChatQuery);
  const cheers = [];
  querySnapShot.forEach((snap) => {
    const data = snap.data();
    cheers.push({ ...data, id: snap.id });
  });
  cheers.reverse();
  return cheers;
};
