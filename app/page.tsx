export default function Home() {
  return (
    <main className="container">
      <aside className="sidebar">
        <h3>Filters</h3>
        <p>Category 1</p>
        <p>Category 2</p>
      </aside>

      <section className="products">
        <div className="card">
          <div className="image-placeholder"></div>
          <h3>Running Shoe</h3>
          <p>$120</p>
        </div>

        <div className="card">
          <div className="image-placeholder"></div>
          <h3>Leather Bag</h3>
          <p>$250</p>
        </div>

        <div className="card">
          <div className="image-placeholder"></div>
          <h3>Classic Watch</h3>
          <p>$180</p>
        </div>
      </section>
    </main>
  );
}





