import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="card">
        <Image src="/shoe.jpg" alt="Running Shoe" width={200} height={200} />
        <h3>Running Shoe</h3>
        <p>$120</p>
      </div>

      <div className="card">
        <Image src="/bag.jpg" alt="Leather Bag" width={200} height={200} />
        <h3>Leather Bag</h3>
        <p>$250</p>
      </div>

      <div className="card">
        <Image src="/watch.jpg" alt="Classic Watch" width={200} height={200} />
        <h3>Classic Watch</h3>
        <p>$180</p>
      </div>
    </>
  );
}
