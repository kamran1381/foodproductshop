import React, { useState, useContext } from 'react';
import { UseProductContext } from '../../context/productcontext';

export default function SearchFilter() {
  const { state, dispatch } = useContext(UseProductContext);
  const [searchvalue, setsearchValue] = useState('');
  const [MinPrice, setMinPrice] = useState('');
  const [MaxPrice, setMaxPrice] = useState('');

  const handleSearchChange = (event) => {
    setsearchValue(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSearchSubmit = () => {
    dispatch({ type: 'ADD_TITLE_LIKE', payload: searchvalue ? searchvalue : null });
    setsearchValue('')
  };

  const handlePriceSubmit = () => {
    dispatch({ type: 'ADD_PRICE_GTE', payload: MinPrice });
    dispatch({ type: 'ADD_PRICE_LTE', payload: MaxPrice });
   
  };

  const handleReset = () => {
    
    dispatch({ type: 'ADD_TITLE_LIKE', payload: null });
    dispatch({ type: 'ADD_PRICE_GTE', payload: null });
    dispatch({ type: 'ADD_PRICE_LTE', payload: null });
  };
  return (
    <>
      <div>
        <div className='mt-5 md:flex items-center'>
          <input
            type='text'
            placeholder='Search products...'
            className='rounded-md border p-2 mr-3'
            value={searchvalue}
            onChange={handleSearchChange}
          />
          <button
            type='button'
            className='bg-blue-500 text-white py-2 px-4 ml-3 rounded-md'
            onClick={handleSearchSubmit}
          >
            Search
          </button>

          <input
            type='number'
            placeholder='Min price'
            className='rounded-md border p-2 mr-3'
            value={MinPrice}
            onChange={handleMinPriceChange}
          />
          <input
            type='number'
            placeholder='Max price'
            className='rounded-md border p-2'
            value={MaxPrice}
            onChange={handleMaxPriceChange}
          />
          <button
            type='button'
            className='bg-blue-500 text-white py-2 px-4 ml-3 rounded-md'
            onClick={ handlePriceSubmit }
          >
            Apply range filter
          </button>
          <button className='bg-blue-500 text-white py-2 px-4 ml-3 rounded-md' onClick={handleReset} >Reset</button>
        </div>
      </div>
    </>
  );
}
