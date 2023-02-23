import { createContext, useState, useEffect } from 'react';
import { useAuthStatus } from '../onAuthStatus';
import {
  doc,
  getDocs,
  getFirestore,
  collection,
  query,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { getAuth } from 'firebase/auth';

export const ListingContext = createContext();

export const ListingDataProvider = ({ children }) => {
  const [listing, setListing] = useState([]);

  const { loggedIn, loading } = useAuthStatus();

  useEffect(() => {
    const auth = getAuth();

    const getData = async () => {
      let array = [];
      const q = query(collection(db, 'listings'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        array.push(doc.data());
      });
      setListing(array);
    };

    getData();
  }, []);

  return (
    <ListingContext.Provider value={{ listing }}>
      {children}
    </ListingContext.Provider>
  );
};

export default ListingDataProvider;
