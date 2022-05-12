import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCVwbM35HJR_yFKLqoMqE33zRQky-sOyKc",
  authDomain: "e-ride-app-82121.firebaseapp.com",
  projectId: "e-ride-app-82121",
  storageBucket: "e-ride-app-82121.appspot.com",
  messagingSenderId: "681291816341",
  appId: "1:681291816341:web:988450d77ec00812b6aa9c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
