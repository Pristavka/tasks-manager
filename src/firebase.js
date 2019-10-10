import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: 'AIzaSyDucrqQLM-3Bcl4-Eq9nf1TSAYELBh2Sww',
    authDomain: 'tasks-manager-1118f.firebaseapp.com',
    databaseURL: 'https://tasks-manager-1118f.firebaseio.com',
    projectId: 'tasks-manager-1118f',
    storageBucket: 'tasks-manager-1118f.appspot.com',
    messagingSenderId: '179356424474',
    appId: '1:179356424474:web:e40ee2b75aa2afa07534a3'
});

export { firebaseConfig as firebase };
