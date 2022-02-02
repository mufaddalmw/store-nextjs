import Link from "next/link";
import styled from "./navigation.module.css";
export default function Navigation() {
  return (
    <div>
      <ul className={styled.navigation}>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/products"><a>Products</a></Link>
        </li>
        <li>
          <Link href="/cart"><a>Cart</a></Link>
        </li>
      </ul>
    </div>
  );
}