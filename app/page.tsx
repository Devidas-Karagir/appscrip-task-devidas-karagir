const products = [
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
  return (
    <div className="products">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}