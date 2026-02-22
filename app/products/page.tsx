"use client";
import Link from "next/link";

export default function Products() {
  return (
    <div className="container">
      <h1>Products</h1>

      <div className="products">
        <div className="card">
          <img src="/shoe.jpg" />
          <h3>Running Shoe</h3>
          <p>$120</p>
        </div>

        <div className="card">
          <img src="/bag.jpg" />
          <h3>Leather Bag</h3>
          <p>$250</p>
        </div>

        <div className="card">
          <img src="/watch.jpg" />
          <h3>Classic Watch</h3>
          <p>$180</p>
        </div>
      </div>

      <Link href="/">← Back Home</Link>
    </div>
  );
}