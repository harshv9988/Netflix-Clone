import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { seedDatabase } from "../seed";

// seeding database

// config

const config = {
  apiKey: "AIzaSyBNrneGISEck0DI0iluQyGLOZ9Ba4DXx5c",
  authDomain: "netflix-clone-8f69b.firebaseapp.com",
  projectId: "netflix-clone-8f69b",
  storageBucket: "netflix-clone-8f69b.appspot.com",
  messagingSenderId: "371788502475",
  appId: "1:371788502475:web:03ffdb18896987dc3dd24e",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
