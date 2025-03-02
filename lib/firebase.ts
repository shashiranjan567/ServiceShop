import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

import firebase from 'firebase/app';

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.auth().settings.appVerificationDisabledForTesting = true;
export default firebase;
// const app = firebase.app();
// export const auth = firebase.auth();
// auth.sign
// const db = firebase.firestore();
// const now = firebase.firestore.Timestamp.now();
// const storage = firebase.storage();
// export { auth, db, now, storage };
// export const firebaseApp = firebase;
