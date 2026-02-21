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
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<number[]>([]);

  const filterProducts = (category: string) => {
    if (category === "All") {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter(p => p.category === category));
    }
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    const filtered = allProducts.filter(p =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filtered);
  };

  const sortLowToHigh = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };

  const sortHighToLow = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  return (
    <div>
      <div className="topbar">
        <h1>Products</h1>
        <div className="cart">🛒 {cart.length}</div>
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <div className="filters">
        <button onClick={() => filterProducts("All")}>All</button>
        <button onClick={() => filterProducts("Footwear")}>Footwear</button>
        <button onClick={() => filterProducts("Accessories")}>Accessories</button>
        <button onClick={sortLowToHigh}>Price ↑</button>
        <button onClick={sortHighToLow}>Price ↓</button>
      </div>

      <div className="products">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product.id)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}