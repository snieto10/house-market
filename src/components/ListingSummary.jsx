import { useState } from 'react';

function ListingSummary({ listing }) {
  const [loading, setLoading] = useState(true);

  if (listing.length === 0) {
    return <div className='container'>Loading</div>;
  }

  return (
    <>
      {' '}
      {listing.map((item) => (
        <div key={item.address} className='container listingSummary'>
          <div className='listingSummary_img'>A</div>
          <div className='listingSummary_text'>
            <div>{item.community}</div>
            <div>{`Bedrooms: ${item.bedroom}`}</div>
            <div>{`Address: ${item.address}`}</div>
            <div>{`Bathrooms: ${item.bathroom}`}</div>
            <div>{`Price: $${item.price}`}</div>
            <div>{`By: ${item.userName}`}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ListingSummary;
