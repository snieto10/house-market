import { Link, useLocation } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthStatus } from '../onAuthStatus';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const { loggedIn, loading } = useAuthStatus();

  const navigate = useNavigate();

  let location = useLocation();

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <nav className='container menu'>
        <div className='menu_title'>
          <Link to='/'>
            <h3 className='menu_title'>HOUSE MARKET PLACE</h3>
          </Link>
        </div>
        <div className='menu_login'>
          <Link to='/login'>
            {loggedIn === true ? null : (
              <button className='btn btn-orange'>Log In</button>
            )}{' '}
          </Link>

          <Link to='/profile'>
            {loggedIn === true ? (
              <button className='btn btn-orange'>Profile</button>
            ) : null}
          </Link>
          {loggedIn === true ? (
            <button className='btn btn-orange' onClick={logOut}>
              Log Out
            </button>
          ) : null}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
