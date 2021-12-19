const { initializeApp } =  require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyAa9WWzqaMkurjcTPsShC5_T1hiaz6byF0",
  authDomain: "service-toko-kj.firebaseapp.com",
  projectId: "service-toko-kj",
  storageBucket: "service-toko-kj.appspot.com",
  messagingSenderId: "516602964927",
  appId: "1:516602964927:web:1db308a63b0ad500180f0a",
  measurementId: "G-GCX0EK155W"
};

const app = initializeApp(firebaseConfig);

module.exports = app;