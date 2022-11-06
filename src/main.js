import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe2sNWPLYX7SQHxzCUDqPDJPJJ9obxZ_E",
  authDomain: "calculate-salary-a9f81.firebaseapp.com",
  projectId: "calculate-salary-a9f81",
  storageBucket: "calculate-salary-a9f81.appspot.com",
  messagingSenderId: "1050217790122",
  appId: "1:1050217790122:web:7ec70bacc7ff99932ceed3",
  measurementId: "G-MCBWGDL7RK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase utils
const db = firebase.firestore();

// firebase collectionsa
const dataCollection = db.collection("salary-salary");

export { app, dataCollection };
