"use client";
import { useState, useEffect } from "react";

const productsData = [
  { id: 1, name: "Running Shoe", price: 120, image: "/shoe.jpg" },
  { id: 2, name: "Leather Bag", price: 250, image: "/bag.jpg" },
  { id: 3, name: "Classic Watch", price: 180, image: "/watch.jpg" },
];

export default function Home() {

  const [cart, setCart] = useState<any[]>([]);

useEffect(() => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    setCart(JSON.parse(savedCart));
  }
}, []);

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>My Store</h1>
      <h2>Cart Items: {cart.length}</h2>

      <div className="products">
        {productsData.map(product => (
          <div key={product.id} className="card">
            <img src={product.image} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>

            <button onClick={() => removeFromCart(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}