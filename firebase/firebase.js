// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAVKmNJ8QB2My81NfMa3JtOmqLMN1mF7nQ',
  authDomain: 'meet-9e4a5.firebaseapp.com',
  projectId: 'meet-9e4a5',
  storageBucket: 'meet-9e4a5.appspot.com',
  messagingSenderId: '629390321767',
  appId: '1:629390321767:web:53d76a18ef168cca58ccc2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
