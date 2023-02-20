import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';
import CreateUser from './pages/CreateUser';
import UserDataProvider from './context/userContext';

function App() {
  return (
    <>
      <UserDataProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/createuser' element={<CreateUser />} />
        </Routes>
      </UserDataProvider>
    </>
  );
}

export default App;
