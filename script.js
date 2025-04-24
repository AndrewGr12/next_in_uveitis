// Import Firebase functions you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Your Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDop3_5k-KWykq_qRYwXCLnAMo0aQonL1s",
  authDomain: "nextinuveitisnewsletter.firebaseapp.com",
  projectId: "nextinuveitisnewsletter",
  storageBucket: "nextinuveitisnewsletter.firebasestorage.app",
  messagingSenderId: "94743281079",
  appId: "1:94743281079:web:2ac196a307e8b8e6eebc32",
  measurementId: "G-Y1PHYGJM3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission and store data in Firestore
const form = document.getElementById('newsletter-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;

  try {
    await addDoc(collection(db, 'subscribers'), {
      firstName,
      lastName,
      email,
      timestamp: serverTimestamp()
    });

    alert('📬 Thanks for subscribing!');
    form.reset();
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("❌ Error: " + error.message);
  }
});