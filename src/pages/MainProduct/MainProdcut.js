
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function MainProduct() {
  const [products, setProducts] = useState([]);
  const { productID } = useParams();
  console.log(productID)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3500/Products');
        const productData = await response.json();
        setProducts(productData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const productInformation = products.find((item) => item.id === Number(productID));

  return (
    <div>
      {productInformation && <div>{productInformation.title}</div>}
    </div>
  );
}
