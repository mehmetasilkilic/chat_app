import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDlvDuJrNEjDfqtVvgNkutF160gVGItWms",
  authDomain: "chat-app-d61f9.firebaseapp.com",
  projectId: "chat-app-d61f9",
  storageBucket: "chat-app-d61f9.appspot.com",
  messagingSenderId: "195241021149",
  appId: "1:195241021149:web:c25171cf561d656f979534",
  databaseURL:
    "https://chat-app-d61f9-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
