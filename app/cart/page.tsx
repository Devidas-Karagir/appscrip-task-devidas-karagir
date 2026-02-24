"use client";
import Link from "next/link";

export default function Cart() {
  return (
    <div className="container">
      <h1>Your Cart</h1>
      <p>No items yet</p>

      <Link href="/">← Back Home</Link>
    </div>
  );
}

export default function CartPage() {
  return (
    <div>
      <h1>Your Cart</h1>
      <p>Cart items will appear here</p>
    </div>
  );
}