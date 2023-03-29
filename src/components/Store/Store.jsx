import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Sidebar from "../Sidebar/Sidebar";
import "./Store.css";
import { ToastContainer, toast } from 'react-toastify';

const Store = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const [cart, setCart] = useState([]);
  const handleBtn = (product) => {
    const findValue = cart.find((value) => value === product);
    // console.log(findValue);
    if (!findValue) {
      const newCart = [...cart, product];
      setCart(newCart);
    } else {
      toast.warning('You can  add only one product', {
        position: toast.POSITION.TOP_RIGHT
    });
    }
  };

  return (
    <div className="store-container">
      <div className="grid grid-cols-3 gap-6">
        {product.map((products) => (
          <Product
            key={product.id}
            products={products}
            handleBtn={handleBtn}
          ></Product>
        ))}
      </div>

      <div className="side-bar-parent">
        <div className="side-bar bg-purple sticky top-2">
          <h1 className="text-3xl text-gray-light p-5">Your Product</h1>
          {cart.map((cart) => (
            <Sidebar product={cart}></Sidebar>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
