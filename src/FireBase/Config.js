// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_veLqWxjROxEdebongwOySNCFWf9nG0w",
  authDomain: "extramilk-ef88b.firebaseapp.com",
  projectId: "extramilk-ef88b",
  storageBucket: "extramilk-ef88b.appspot.com",
  messagingSenderId: "814497559568",
  appId: "1:814497559568:web:b815bf0002c35204380695"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
