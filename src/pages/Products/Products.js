import React, { useState, useEffect, useContext } from 'react';
import ProductCard from '../../Components/Shop page components/ProductCard/ProductCard';
import { ProductReducerContext } from '../../context/ProductReducerContext.js';
import ProductsUrl from '../../apiconfiguration/producturl/ProductsUrl.js'
import { fetchData } from '../../apiconfiguration/apiutils/apiUtils.js';
export default function Products() {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [maincategory, setMainCategory] = useState('all');
  const [searchInput, setSearchInput] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const { state, dispatch } = useContext(ProductReducerContext);

  useEffect(() => {


    const fetchTopProducts = async () => {
      try {
        const data = await fetchData(ProductsUrl);
        const allCategories = ['all', ...new Set(data.map((item) => item.category))];
        setProducts(data);
        setOriginalProducts(data);
        setCategories(allCategories);
      } catch (error) {
        console.error('Error fetching top products:', error);
      }

    };

    fetchTopProducts()
  }, []);

  const filterMenus = (category) => {
    if (category === 'all') {
      setMainCategory(category);
      setProducts(originalProducts);
    } else {
      const filteredProducts = originalProducts.filter((item) => item.category === category);
      setMainCategory(category);
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    let DataUrl = '?';
    for (const key in state) {
      if (state[key] !== null) {
        DataUrl += `${key}=${state[key]}&`;
      }
    }

    const FetchNewData = async () => {
      const response = await fetch(`${ProductsUrl}${DataUrl}`);
      const data = await response.json();
      setProducts(data);

      console.log(data)
    };

    FetchNewData();
  }, [state]);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch(ProductsUrl);
      const data = await response.json();
      setProducts(data);
    } catch (errors) {
      console.log(errors);
    }
  };

  const submitSearchInfo = () => {
    if (searchInput) {
      dispatch({ type: 'ADD_TITLE_LIKE', payload: searchInput });
    } else {
      fetchAllProducts();
    }
    setSearchInput('');
  };

  const handlePriceFilter = (event) => {
    const selectedPrice = event.target.value;
    setPriceFilter(selectedPrice);
    dispatch({ type: 'ADD_PRICE_LTE', payload: selectedPrice });
  };

  return (
    <div>
      <div className="bg-[#FBFBFB]">
        <h2 className="py-6 px-3 text-3xl text-gray-900 font-semibold">Shop</h2>
      </div>
      <div className="mx-3 mt-3">
        <div className="flex justify-between space-x-4">
          <div className="flex items-center">
            <ul className="flex space-x-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    className="bg-gray-300 px-3 py-1 rounded-md"
                    onClick={() => {
                      setMainCategory(category);
                      filterMenus(category);
                    }}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
      
            <div>
            <form className='flex space-x-3 items-center'>
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              
              <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Food..." required
                value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)} />
            
            </div>
            <button type="submit" class="inline-flex items-center px-7 ms-2 text-sm py-3 font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={submitSearchInfo}>
              <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>Search
            </button>

            <select  id="countries_disabled" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handlePriceFilter}>
              <option selected>Choose a price</option>
              <option value="10">Below $10</option>
              <option value="20">Below $20</option>
              <option value="30">Below $30</option>
            </select>



          </form>
            </div>
         

        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

