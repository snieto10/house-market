import { UserContext } from '../context/userContext';
import { ListingContext } from '../context/listingContext';
import { useContext } from 'react';
import image1 from '../assets/images/picture1.jpg';
import image2 from '../assets/images/picture2.jpg';
import Filter from './../components/Filter';

function Home() {
  const { user } = useContext(UserContext);
  const { listing } = useContext(ListingContext);

  console.log(listing);

  return (
    <>
      <div className='container'>
        <h2>{user ? `Welcome ${user.name}` : ''}</h2>
      </div>
      <div className='container flex main'>
        <div className='main-title'>
          <h2>FOR SALE</h2>
        </div>
        <div className='main-title'>
          <h2>FOR RENT</h2>
        </div>
      </div>
      <div className='container flex main'>
        <div className='main1'>
          <img src={image1} alt='' className='main_image' />
        </div>
        <div className='main1'>
          <img src={image2} alt='' className='main_image' />
        </div>
      </div>
      <div className='container'>
        <h2>TOP LISTINGS</h2>
      </div>
      <Filter />
    </>
  );
}

export default Home;
