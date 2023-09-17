import React, { useEffect, useState } from 'react';
import './topseller.css'
import { Link } from 'react-router-dom';
const TopBox = ({ product }) => {
    return (
        <div className=' bg-white w-full rounded overflow-hidden shadow-lg flex  '>
            <img className='w-2/5 h-48 px-3 py-3 hover:bg-zinc-500' src={product.img} alt='Sunset in the mountains' />

            <div className='w-3/5 flex flex-col justify-center text-center'>
                <div className='font-bold text-xl mb-2'>{product.title}</div>
                <Link to='/products' className='bg-blue-800 text-white font-semibold  py-2 rounded-md hover:bg-gray-900 transition duration-300  '>Purchase &#10095;</Link>
            </div>
        </div>
    );
};

export default function Topseller() {
    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {

        const FetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3500/Products?_limit=8")
                const data = await response.json()
                setTopProducts(data)
            } catch (err) {
                console.log(err)
            }
        }

        FetchProducts()
    }, []);

    return (
        <div className='top-seller-container'>
            <h2 className='text-justify px-3 text-white text-3xl first-letter:font-bold py-6'>top Products</h2>

            <div className='top-seller-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3 px-36 '>
                {topProducts.map((product) => (
                    <TopBox key={product.id} product={product} />
                ))}

               <Link to='/products'><button className='bg-blue-900 rounded-full text-white px-4 py-6 hover:bg-blue-800 transition duration-300 ' >&#10095;</button></Link>

            </div>
        </div>

    );
}

