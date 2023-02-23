import { UserContext } from '../context/userContext';
import { useContext } from 'react';

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className='container flexColumn'>
        <h1>{user ? 'Your Profile:' : 'Please Log in'}</h1>
        <h3>Name: {user ? user.name : ''}</h3>
        <h3>Email: {user ? user.email : ''}</h3>
        <h3>City: {user ? user.city : ''}</h3>
        <h3>Phone: {user ? user.phone : ''}</h3>
        <h3>Listings: {user ? user.listings : ''}</h3>
        <h3>Offers: {user ? user.offers : ''}</h3>
      </div>
    </>
  );
}

export default Profile;
