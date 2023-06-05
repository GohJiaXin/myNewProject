import {initalizeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";

const firebaseConfiig={
    apiKey: "AIzaSyDvHOXXFKKBZDsVoVkhtLm8INrQ9twq-es",
  authDomain: "mynewproject-37774.firebaseapp.com",
  projectId: "mynewproject-37774",
  storageBucket: "mynewproject-37774.appspot.com",
  messagingSenderId: "902090479824",
  appId: "1:902090479824:web:1d979921b64c1a02f466d5",
  measurementId: "G-DJ88481KXS"
};

const app=initalizeApp(firewallConfig);
const db=getFirestore(app);
module.exports=db;