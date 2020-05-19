import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA0SgqVm9IWKGPNvzxsNwk8T11vAU1hDHk",
  authDomain: "cloth-shop-db-51830.firebaseapp.com",
  databaseURL: "https://cloth-shop-db-51830.firebaseio.com",
  projectId: "cloth-shop-db-51830",
  storageBucket: "cloth-shop-db-51830.appspot.com",
  messagingSenderId: "1045762804148",
  appId: "1:1045762804148:web:22ef564a719c1dcd4ecae1",
  measurementId: "G-96ZKBM3TGG",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

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
        ...additionalData,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// Always trigger google popup whenever the googleauthprovider is used for auth & sign-in.
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
