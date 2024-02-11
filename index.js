import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase , ref} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeO5fXQa7n63Gz3KC8vS2oAmkTytK0uZI",
  authDomain: "contactform-b17e0.firebaseapp.com",
  databaseURL: "https://contactform-b17e0-default-rtdb.firebaseio.com",
  projectId: "contactform-b17e0",
  storageBucket: "contactform-b17e0.appspot.com",
  messagingSenderId: "17487390624",
  appId: "1:17487390624:web:8cdfde976650acf7a3a6c5"
};



// Initialize Firebase
// initialize firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
var contactFormDB = firebase.database().ref("ContactForm");


// reference your database
var contactFormDB = firebase.database().ref("ContactForm");

document.getElementById("ContactForm").addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();

var name = getElementVal("name");
var email = getElementVal("email");
var telp = getElementVal("telepon");
var msgContent = getElementVal("textarea");

saveMessages(name, email, telp,  msgContent);

//   //   enable alert
//   document.querySelector(".alert").style.display = "block";

//   //   remove the alert
//   setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);

//   reset the form
document.getElementById("ContactForm").reset();
}

const saveMessages = (name, email, telp,  msgContent) => {
var newContactForm = contactFormDB.push();

newContactForm.set({
  name: name,
  email: email,
  telp: telp,
  msgContent: msgContent,
});
};



const getElementVal = (id) => {
return document.getElementById(id).value;
};