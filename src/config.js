import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAi5Je5NAx5CS7ywFq_M-637aul4jcLtng",
    authDomain: "komunikator-8b88a.firebaseapp.com",
    databaseURL: "https://komunikator-8b88a.firebaseio.com",
    projectId: "komunikator-8b88a",
    storageBucket: "komunikator-8b88a.appspot.com",
    messagingSenderId: "178780221281",
    appId: "1:178780221281:web:6dd9c471fc92f6f3751f20"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;