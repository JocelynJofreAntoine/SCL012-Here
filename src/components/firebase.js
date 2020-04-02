import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firebase-firestore";
import { useIdTokenResult } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyBKe15jDJOjs162ET_Pj3FxyfVkXPC5cYk",
  authDomain: "here-360c9.firebaseapp.com",
  databaseURL: "https://here-360c9.firebaseio.com",
  projectId: "here-360c9",
  storageBucket: "here-360c9.appspot.com",
  messagingSenderId: "1072229486553",
  appId: "1:1072229486553:web:b71b9e83995d89511e13c8",
  measurementId: "G-ETJP40QM17"
};
// app.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.database = app.firestore();
    this.db = app.database();
  }

  async createUserTable (){
    await this.database.doc('users/' + this.auth.currentUser.uid).set({
      users:[],
    })
  }

  async getUsers (){
    return await this.database.ref('users-' + this.auth.currentUser.uid);
  }

  //para traer la capeta del nombre users y adentro de esa carpeta traeme un documento que coincida con el userId y luego extraemos el exist para ver si esta creado (si existe)
  async hashTable (userId){
   const {exists} = await this.database.collection('users').doc(userId).get();
   return exists;
  }

  //Registra un usuario
  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }

  //Inicia sesion del usuario
  async login(email, password) {
   await this.auth.signInWithEmailAndPassword(email, password);
   return this.auth.currentUser.updateProfile({
    displayName: useIdTokenResult
  });
  }

  //Cierra sesion del usuario
  logout() {
    return this.auth.signOut();
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
