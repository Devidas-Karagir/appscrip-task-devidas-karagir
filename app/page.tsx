export default function Home() {
  return (
    <div className="products">

      <div className="card">
        <img src="/shoe.jpg" alt="Running Shoe" />
        <h3>Running Shoe</h3>
        <p>$120</p>
      </div>

      <div className="card">
        <img src="/bag.jpg" alt="Leather Bag" />
        <h3>Leather Bag</h3>
        <p>$250</p>
      </div>

      <div className="card">
        <img src="/watch.jpg" alt="Classic Watch" />
        <h3>Classic Watch</h3>
        <p>$180</p>
      </div>

    </div>
  );
}