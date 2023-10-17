import React, { useEffect, useState } from 'react';
import './topseller.css'
import { Link } from 'react-router-dom';
import CardSlider from '../cards/CardSlider';


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
        <div className='top-seller-container py-10'>
            <div class="section">
                <div class="line"></div>
                <h2 className='seller-title text-white'>Top Seller Products Now</h2>
                <div class="line"></div>
            </div>

            <div class="gallery-slider-container mt-20" >
            <CardSlider topProducts={topProducts}/>
            </div>
        </div>

    );
}

