"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="container">
      <h1>My Store</h1>
      <h2>Cart Items: {cartCount}</h2>

      <button onClick={() => setCartCount(cartCount + 1)}>
        Add Item
      </button>

      <div className="links">
        <Link href="/products">Go to Products</Link>
        <Link href="/cart">Go to Cart</Link>
      </div>
    </div>
  );
}