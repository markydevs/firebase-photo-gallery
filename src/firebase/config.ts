// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCmvQEkyHFlsUI5E8f63_x1q4tiud5WYXs",
	authDomain: "image-gallery-e4d50.firebaseapp.com",
	projectId: "image-gallery-e4d50",
	storageBucket: "image-gallery-e4d50.firebasestorage.app",
	messagingSenderId: "165335331027",
	appId: "1:165335331027:web:7e2b8b5fad0912b36a6426",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
export { auth, storage };
