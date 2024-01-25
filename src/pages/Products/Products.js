import React, { useState, useEffect, useContext } from 'react';
import ProductCard from '../../Components/Shop page components/ProductCard/ProductCard';
import { ProductReducerContext } from '../../context/ProductReducerContext';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [maincategory, setMainCategory] = useState('all');
  const [searchInput, setSearchInput] = useState('');
  const [priceFilter, setPriceFilter] = useState(''); 
  const { state, dispatch } = useContext(ProductReducerContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('http://localhost:3500/Products');
        const response = await fetch('https://potent-night-hound.glitch.me/Products');
        const data = await response.json();
        setProducts(data);
        // setOriginalProducts(data);
        // const allCategories = ['all', ...new Set(data.map((item) => item.category))];
        // setCategories(allCategories);
        console.log(data)
      } catch (errors) {
        console.log(errors);
      }
    };

    fetchData();
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
      const response = await fetch(`https://potent-night-hound.glitch.me/Products${DataUrl}`);
      const data = await response.json();
      setProducts(data);
    };

    FetchNewData();
  }, [state]);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch('https://potent-night-hound.glitch.me/Products');
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
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Search products"
              className="border p-2 rounded-md"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <button className="bg-slate-700 text-white px-2 py-2" onClick={submitSearchInfo}>
              Search
            </button>
            <select className="border p-2 rounded-md" onChange={handlePriceFilter}>
              <option value="">All Prices</option>
              <option value="10">Below $10</option>
              <option value="20">Below $20</option>
              <option value="30">Below $30</option>
            </select>
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
