import React, { useState, useEffect } from 'react';
import './Toprated.css';
import TopBox from '../TopBox/TopBox';
import ProductsUrl from '../../../apiconfiguration/producturl/ProductsUrl';
import { fetchData } from '../../../apiconfiguration/apiutils/apiUtils';
export default function TopRated() {
  const [ProductArray, setProductArray] = useState([])

  useEffect(() => {

const fetchAllData = async () => {
      const ResData = await fetchData(ProductsUrl)
      setProductArray(ResData)
      
    }
    fetchAllData()

  }, [])
  return (
    <div>


      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
        <div className="grid-group mb-12 mt-3 ">
          <div className="grid-group-image">
            <div class="section">
              <div class="line"></div>
              <h2 className='seller-title text-lg text-white'>Best Seller</h2>
              <div class="line"></div>
            </div>
          </div>
          <div className='mt-3 space-y-5 text-center'>
            {ProductArray.slice(0, 3).map(item => (
              <TopBox {...item} key={item.id} />
            ))}
          </div>

        </div>

        <div className="grid-group mb-12 mt-3 ">
          <div className="grid-group-image">
            <div class="section">
              <div class="line"></div>
              <h2 className='seller-title text-lg text-white'>Top Rated</h2>
              <div class="line"></div>
            </div>
          </div>
          <div className='mt-3 space-y-5 text-center'>
            {ProductArray.slice(3, 6).map(item => (
              <TopBox {...item} key={item.id} />
            ))}
          </div>

        </div>

        <div className="grid-group mb-12 mt-3 ">
          <div className="grid-group-image">
            <div class="section">
              <div class="line"></div>
              <h2 className='seller-title text-lg text-white'>Sale products</h2>
              <div class="line"></div>
            </div>
          </div>
          <div className='mt-3 space-y-5 text-center'>
            {ProductArray.slice(6, 8).map(item => (
              <TopBox {...item} key={item.id} />
            ))}
          </div>

        </div>


        <div className="grid-group mb-12 mt-3 ">
          <div className="grid-group-image">
            <div class="section">
              <div class="line"></div>
              <h2 className='seller-title text-lg text-white'>Featured</h2>
              <div class="line"></div>
            </div>
          </div>
          <img src='images/products img/item-5.jpeg' alt="Contributor 1" className="w-full block mt-3" />


        </div>

      </section>



    </div>
  );
}
