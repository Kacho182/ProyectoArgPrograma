import { initializeApp, FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig: FirebaseOptions = {
  projectId: 'portfolio-argentinaprogr-1b50f',
    appId: '1:1001294989752:web:8d9d2186c7da553d12674d',
    storageBucket: 'portfolio-argentinaprogr-1b50f.appspot.com',
    apiKey: 'AIzaSyCjiJxbV4FTHsT0hF96fokWLjwi0m7VmGA',
    authDomain: 'portfolio-argentinaprogr-1b50f.firebaseapp.com',
    messagingSenderId: '1001294989752',

}

// Inicializar la aplicación Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore
const firestore = getFirestore(app);


export const environmentProd = {
    production: true,
    URL: 'https://portfolio-argentinaprogr-1b50f.web.app/'

}
