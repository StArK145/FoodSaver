import { initializeApp } from "firebase/app";
import { getAuth,setPersistence, browserLocalPersistence,signInWithEmailAndPassword,onAuthStateChanged  } from "firebase/auth";

const firebaseConfig = {
  apiKey:"AIzaSyDkyqgzmK1kfDVtwhQ8EbpHINcpmmHDmfI",
  authDomain: "foodsaver-4bda7.firebaseapp.com",
  projectId: "foodsaver-4bda7",
  storageBucket:"foodsaver-4bda7.firebasestorage.app",
  messagingSenderId: "766791738829",
  appId:"1:766791738829:web:7760597e1c4982b625d084"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const user = auth.currentUser;
export const loginUser = (email, password) => {
  setPersistence(auth, browserLocalPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password);
    })
    .then((userCredential) => {
      // Login successful
      console.log("Logged in:", userCredential.user.email);
    })
    .catch((error) => {
      console.error("Login error:", error.message);

    });
};



export {user, auth,signInWithEmailAndPassword, };

