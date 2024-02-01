import React, { useState, useEffect , useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {ProductCartContext} from '../../../context/ProductCartContext'
import ProductsUrl from '../../../apiconfiguration/producturl/ProductsUrl';
import { fetchData } from '../../../apiconfiguration/apiutils/apiUtils';
export default function ProductPage() {
    const [products, setProducts] = useState([]);
  const { productID } = useParams();
  const [productInformation, setProductInformation] = useState(null);
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(ProductCartContext);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const data = await fetchData(ProductsUrl);
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    const selectedProduct = products.find((item) => item.id === Number(productID));
    setProductInformation(selectedProduct);
  }, [productID, products]);

  const getProductQuantity = () => {
    const selectedCartItem = state.cartitems.find((item) => item.id === productInformation?.id);
    return selectedCartItem ? selectedCartItem.quantity : 0;
  };

  const AddProducttoCart = (productInformation) => {
    const existingItem = state.cartitems.find((item) => item.id === productInformation.id);

    if (existingItem) {
      const updatedCartItem = { ...existingItem, quantity: existingItem.quantity + 1 };
      dispatch({ type: 'ADD-TO-ITEM-CART', payload: updatedCartItem });
    } else {
      const newCartItem = { ...productInformation, quantity: 1 };
      dispatch({ type: 'ADD-TO-ITEM-CART', payload: newCartItem });
    }
  };

  const IncreaseQuantity = () => {
    dispatch({ type: 'INCREASE-QUANTITY', payload: productInformation?.id });
  };

  const DecreaseQuantity = () => {
    dispatch({ type: 'DECREASE-QUANTITY', payload: productInformation?.id });
  };
  
  return (

    <>
    {loading ? (
      <div>loading...</div>
    ) : productInformation ? (
      <>
        <div className='bg-[#FBFBFB] mx-4 md:mx-7'>
          <h2 className='py-6 text-xl text-gray-900 font-semibold '>
            {productInformation?.title}
          </h2>
        </div>
        <div className='container mx-auto md:grid md:grid-cols-2 gap-4 px-4 md:px-0'>
          <div className='pt-2 w-full md:w-auto'>
            <img src={`/${productInformation?.img}`} alt={productInformation.title} className='w-full' />
          </div>
          <div className='pt-2'>
            <span>${productInformation?.price}</span>
            <hr className='my-2' />
            <div className='flex flex-col md:flex-row items-center'>
              <div className='md:w-64'>
                <form className="max-w-xs mx-auto">
                  <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                  <div className="relative flex max-w-[8rem]">
                    <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" onClick={() => DecreaseQuantity(productInformation.id)}>
                      <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                      </svg>
                    </button>
                    <input type="text" value={getProductQuantity()} id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required />
                    <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" onClick={() => IncreaseQuantity(productInformation.id)}>
                      <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                  <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select a 5 digit number from 0 to 9.</p>
                </form>
              </div>
              <div className='mt-4 md:mt-0'>
                <Link to='/shippingData'>
                  <button type="button" className="text-white bg-[#585c61] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2" onClick={() => AddProducttoCart(productInformation)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
                    </svg>
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
            <hr className='my-4' />
            <div className=''>
              <p className='text-bold py-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
            <hr className='my-4' />
            <div className='flex justify-between items-center'>
              <div>
                <p>Share</p>
              </div>
              <div className='py-3'>
                <ul className="space-x-4 text-gray-500 list-none list-inside dark:text-gray-400 flex">
                  <li>
                    <a href='#'><TwitterIcon /></a>
                  </li>
                  <li>
                    <a href='#'><FacebookIcon /></a>
                  </li>
                  <li>
                    <a href='#'><YouTubeIcon /></a>
                  </li>
                  <li>
                    <a href='#'><LinkedInIcon /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    ) : <div>product info is still not rendered</div>}
  </>
  
  );
}

