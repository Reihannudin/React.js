import { initializeApp } from "firebase/app";

import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import { 
    getFirestore, 
    doc, 
    getDoc, 
    getDocs, 
    setDoc ,
    collection,
    writeBatch,
    query
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBgp-kyk3EAR-U6kn7h1oTmFKo4TYH0Dqg",
//   authDomain: "mcdproduct-db.firebaseapp.com",
//   projectId: "mcdproduct-db",
//   storageBucket: "mcdproduct-db.appspot.com",
//   messagingSenderId: "183401891172",
//   appId: "1:183401891172:web:517f39474b3550d02a6671",
//   measurementId: "G-XS287LRTTD",
// };

// crown db
const firebaseConfig = {
  apiKey: "AIzaSyAGrXiF6-s9Pf8zQZ_4rDWOsHwRq5h7Dl0",
  authDomain: "crown-clothing-db-95105.firebaseapp.com",
  projectId: "crown-clothing-db-95105",
  storageBucket: "crown-clothing-db-95105.appspot.com",
  messagingSenderId: "159220558025",
  appId: "1:159220558025:web:e2022fa4c2af7bfa6b0518",
  measurementId: "G-CSSD749MMM"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => 
signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey , objectsToAdd , field) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef , object)
  })

  await batch.commit();
  console.log('done')  
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db , 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc , docSnapshot) => {
    const { title , items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc 
  } , {})
  return categoryMap
}

export const createUserDocumentFromAuth = async (
  userAuth , additionalInformation) => {
  if(!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const { displayName , email } = userAuth; //phoneNumber , photoURL
    const createdAt = new Date();

    try{
        await setDoc(userDocRef,{
            displayName,
            email,
            // phoneNumber,
            // photoURL,
            createdAt,
            ...additionalInformation,
        });
    }  catch(error){
        console.log('error creating the user' , error.message)
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth , email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {

  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth , email, password);
}

export const signOutUser = async () => {
  signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
}