import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// ✅ Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD1re0F-ZSNZ6v09anWgJQpLajRX_T09ls",
  authDomain: "internship-task-01.firebaseapp.com",
  projectId: "internship-task-01",
  storageBucket: "internship-task-01.appspot.com",
  messagingSenderId: "1065171785466",
  appId: "1:1065171785466:web:24f348ff6f22c61bfd5b43",
  measurementId: "G-D57RLB8WLW"
};

// ✅ Firebase Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Login Event
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("message");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      msg.textContent = "✅ Login successful!";
      msg.style.color = "green";
      console.log("Logged in user:", userCredential.user);
    })
    .catch((error) => {
      msg.textContent = `❌ ${error.message}`;
      msg.style.color = "red";
      console.error("Login error:", error);
    });
});
