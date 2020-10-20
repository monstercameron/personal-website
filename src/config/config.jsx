import firebase from 'firebase/app';
import "firebase/firebase-firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCW__lBoiLllAr0oq3Q_Wypizv_wb_D_R0",
  authDomain: "ideation-86067.firebaseapp.com",
  databaseURL: "https://ideation-86067.firebaseio.com",
  projectId: "ideation-86067",
  storageBucket: "ideation-86067.appspot.com",
  messagingSenderId: "48309645592",
  appId: "1:48309645592:web:c9e0581d05055a4a",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
