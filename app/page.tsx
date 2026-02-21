"use client";
import { useState } from "react";

const allProducts = [
  {
    id: 1,
    name: "Running Shoe",
    price: 120,
    image: "/shoe.jpg",
    category: "Footwear",
  },
  {
    id: 2,
    name: "Leather Bag",
    price: 250,
    image: "/bag.jpg",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Classic Watch",
    price: 180,
    image: "/watch.jpg",
    category: "Accessories",
  },
];

export default function Home() {
  const [products, setProducts] = useState(allProducts);

  const filterProducts = (category: string) => {
    if (category === "All") {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (p) => p.category === category
      );
      setProducts(filtered);
    }
  };

  return (
    <div>
      <h1>Products</h1>

      <div className="filters">
        <button onClick={() => filterProducts("All")}>All</button>
        <button onClick={() => filterProducts("Footwear")}>Footwear</button>
        <button onClick={() => filterProducts("Accessories")}>
          Accessories
        </button>
      </div>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}