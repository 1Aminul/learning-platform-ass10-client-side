// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvDrh8DXIWLARE9pn08nY0-V_AAb_znpA",
  authDomain: "learning-platform-ass10-client.firebaseapp.com",
  projectId: "learning-platform-ass10-client",
  storageBucket: "learning-platform-ass10-client.appspot.com",
  messagingSenderId: "934545404526",
  appId: "1:934545404526:web:09ff44d35253a4e3bb6c7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;