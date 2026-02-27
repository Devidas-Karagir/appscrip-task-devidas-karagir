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

