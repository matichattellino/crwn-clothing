import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyARBw4QwxFueLuA4VZCOSTwq9VVljPRRuA",
    authDomain: "crwn-db-b73be.firebaseapp.com",
    databaseURL: "https://crwn-db-b73be.firebaseio.com",
    projectId: "crwn-db-b73be",
    storageBucket: "crwn-db-b73be.appspot.com",
    messagingSenderId: "798004701193",
    appId: "1:798004701193:web:ef5cba65228a0e617b30d8",
    measurementId: "G-V3RM9TK6GF"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



