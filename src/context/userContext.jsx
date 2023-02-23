import { createContext, useState, useEffect } from 'react';
import { useAuthStatus } from '../onAuthStatus';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { db } from '../firebase.config';
import { getAuth } from 'firebase/auth';

export const UserContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState('hello');

  const { loggedIn, loading } = useAuthStatus();

  useEffect(() => {
    const auth = getAuth();

    const getData = async () => {
      if (loggedIn) {
        const docRef = doc(db, 'users', auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        setUser(docSnap.data());
      } else {
        setUser(null);
      }
    };

    getData();
  }, [loggedIn]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserDataProvider;
