import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase.config';
import { useAuthStatus } from '../onAuthStatus';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase.config';
import { collection, setDoc, doc } from 'firebase/firestore';

function CreateUser() {
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
    name: '',
    id: '',
    city: '',
    phone: '',
    listings: [],
    offers: [],
  });

  const { email, password, name, id, city, phone, listings, offers } = dataForm;

  const navigate = useNavigate();

  const { loggedIn, loading } = useAuthStatus();

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.id]: e.target.value });
  };

  const handleClick = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return user.uid;
      })
      .then((user) => {
        setDoc(doc(db, 'users', user), dataForm);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className='loginBox'>
        <h1 className='login_text'>Create User </h1>
        <input
          className='login_input'
          type='text'
          placeholder='Email'
          onChange={handleChange}
          id='email'
        />
        <input
          className='login_input'
          type='password'
          placeholder='Password'
          onChange={handleChange}
          id='password'
        />
        <input
          className='login_input'
          type='text'
          placeholder='Name'
          onChange={handleChange}
          id='name'
        />
        <input
          className='login_input'
          type='text'
          placeholder='City'
          onChange={handleChange}
          id='city'
        />
        <input
          className='login_input'
          type='number'
          placeholder='Phone'
          onChange={handleChange}
          id='phone'
        />

        <button className='btn btn-orange btn-login' onClick={handleClick}>
          Log In
        </button>

        <h3 className='login_text'>Create User Name</h3>
        <h3 className='login_text'>Forgot Password</h3>
      </div>
    </>
  );
}

export default CreateUser;
