import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWKhsY-3_POddWv1QgWRB8zqroeiEVjXI",
  authDomain: "online-shop-fs-14.firebaseapp.com",
  projectId: "online-shop-fs-14",
  storageBucket: "online-shop-fs-14.appspot.com",
  messagingSenderId: "652453768763",
  appId: "1:652453768763:web:569efe5beac3eac32d761e",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
