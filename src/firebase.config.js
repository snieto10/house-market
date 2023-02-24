import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD-mB38CPKLJvw-ROpZ8QAXT6rIsI-cuoY',
  authDomain: 'house-market-dc130.firebaseapp.com',
  projectId: 'house-market-dc130',
  storageBucket: 'house-market-dc130.appspot.com',
  messagingSenderId: '449265267036',
  appId: '1:449265267036:web:7833e2621e49fcd128d199',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage();
