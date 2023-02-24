import { useState } from 'react';
import { ListingContext } from '../context/listingContext';
import { useContext } from 'react';

function Filter() {
  const { listing, changeCity } = useContext(ListingContext);

  const selectCity = (e) => {
    changeCity(e.target.value);
  };

  return (
    <>
      <div className='container filter'>
        <div>FILTER BY</div>
        <div>
          <label htmlFor='city'>City:</label>
          <select name='city' id='city' onChange={selectCity}>
            <option value='allcities'>All Cities</option>
            <option value='miami'>Miami</option>
            <option value='doral'>Doral</option>
            <option value='miami beach'>Miami Beach</option>
          </select>
        </div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
    </>
  );
}

export default Filter;
