
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/storage'
// import 'firebase/analytics'
// import 'firebase/firebase-analytics'


import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

  // apiKey: "AIzaSyDBtm3VXjL075xLRhqNGsdsONMKR7avcKU",

  // authDomain: "zainbay-auth-6fd5c.firebaseapp.com",

  // projectId: "zainbay-auth-6fd5c",

  // storageBucket: "zainbay-auth-6fd5c.appspot.com",

  // messagingSenderId: "626863357835",

  // appId: "1:626863357835:web:4208680478f06b122c398e",

  // measurementId: "G-8WHWLQ0M11"




  // apiKey: "AIzaSyD8gheb1X2U-vtjx6zdd-gVRznWxNKx1Yw",

  // authDomain: "infome-zainbay2.vercel.app",

  // projectId: "zainbay-ecom",

  // storageBucket: "zainbay-ecom.appspot.com",

  // messagingSenderId: "741614100543",

  // appId: "1:741614100543:web:68108be4d48e27763ad88a"



  

  apiKey: "AIzaSyD8gheb1X2U-vtjx6zdd-gVRznWxNKx1Yw",

  authDomain: "zainbay-ecom.firebaseapp.com",

  projectId: "zainbay-ecom",

  storageBucket: "zainbay-ecom.appspot.com",

  messagingSenderId: "741614100543",

  appId: "1:741614100543:web:68108be4d48e27763ad88a"


};


// infome-zainbay1.vercel.app

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}else {
  firebase.app(); // if already initialized, use that one
}

// typeof window !== 'undefined' && firebase.analytics()
export default firebase


// const app = initializeApp(firebaseConfig);

// // let analytics
// // if (typeof window !== 'undefined') {
// //  analytics = getAnalytics(app);
// // }


// export default app