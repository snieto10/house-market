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
  const [allListings, setAllListings] = useState([]);

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
      setAllListings(array);
    };

    getData();
  }, []);

  const changeCity = (city) => {
    if (city === 'allcities') {
      setListing(allListings);
      return;
    }
    const array = [...allListings];
    const filtered = array.filter((item) => item.city === city);
    setListing(filtered);
  };

  return (
    <ListingContext.Provider value={{ listing, changeCity }}>
      {children}
    </ListingContext.Provider>
  );
};

export default ListingDataProvider;
