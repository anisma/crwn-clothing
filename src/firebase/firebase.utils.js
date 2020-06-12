import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
   apiKey: "AIzaSyBXpncCXhr5M8bgLKqBhmF_j56QYXtCBcM",
   authDomain: "crwn-db-17633.firebaseapp.com",
   databaseURL: "https://crwn-db-17633.firebaseio.com",
   projectId: "crwn-db-17633",
   storageBucket: "crwn-db-17633.appspot.com",
   messagingSenderId: "563551622360",
   appId: "1:563551622360:web:f03204d6e130ec828e33ad",
   measurementId: "G-1LF9C33W7E",
};

firebase.initializeApp(config);

//create and add user profile document into firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createAt,
            ...additionalData,
         });
      } catch (error) {
         console.log("error creating user", error.message);
      }
   }

   return userRef;
};

// add collection (shop) and document into firestore
export const addCollectionAndDocuments = async (
   collectionKey,
   objectsToAdd
) => {
   const collectionRef = firestore.collection(collectionKey);

   const batch = firestore.batch();
   objectsToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
   });

   await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
   const transformedColection = collections.docs.map((doc) => {
      const { title, items } = doc.get().data();

      return {
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title,
         items,
      };
   });

   transformedColection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
   }, {});
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
