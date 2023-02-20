import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase.config';
import { useAuthStatus } from '../onAuthStatus';
import { useNavigate, Link } from 'react-router-dom';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { loggedIn, loading } = useAuthStatus();

  const handleClick = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/');
        console.log(user);
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
        <input
          className='login_input'
          type='text'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='login_input'
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn btn-orange btn-login' onClick={handleClick}>
          Log In
        </button>

        <Link to='/createuser'>
          <h3 className='login_text'>Create User Name</h3>
        </Link>
        <h3 className='login_text'>Forgot Password</h3>
      </div>
    </>
  );
}

export default LogIn;
