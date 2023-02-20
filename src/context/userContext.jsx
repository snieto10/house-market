import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState('hello');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserDataProvider;
