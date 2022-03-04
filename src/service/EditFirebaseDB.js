import React from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

const firestore = getFirestore();
const cheeringList = doc(firestore, 'Nexon/cheeringList');
const writeCheering = async () => {
  const docDate = {
    data: '2022-03-03',
    oneWord: '너무하네',
    nickName: '개발자',
  };
  try {
    await setDoc(cheeringList, docDate, { merge: true });
    console.log('setDocSuccess');
  } catch (error) {
    console.log('setDocError', error);
  }
};

const readSingleDocument = async () => {
  const mySnapShot = await getDoc(cheeringList);
  if (mySnapShot.exists()) {
    const docData = mySnapShot.data();
    console.log('decData', JSON.stringify(docData));
  }
};

let dailySpecialUnsubscribe;

const listenToADocument = async () => {
  dailySpecialUnsubscribe = onSnapshot(cheeringList, (docSnapshot) => {
    if (docSnapshot.exists()) {
      const docData = docSnapshot.data();
      console.log('realTime Data', JSON.stringify(docData));
    }
  });
};

const cancelMyListenerAtAppropriateTime = () => {
  dailySpecialUnsubscribe();
};

const EditFirebaseDb = () => {
  writeCheering();
  readSingleDocument();
  listenToADocument();

  return <div>EditFirebaseDb</div>;
};

export default EditFirebaseDb;
