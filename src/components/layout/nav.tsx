import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between items-center h-[80px] sticky top-0 z-50 bg-[#ffdab9] text-[#1d2f43]">
      <div className="ml-2">
        <Link href="/">
          <Image src="/dummy-logo.png" width={80} height={80} alt="logo" />
        </Link>
      </div>
      <div>
        <ul className="flex flex-row justify-between items-center">
          <li className="mx-4 hover:text-[#6d9bc3]">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-4 hover:text-[#6d9bc3]">
            <Link href="/products">Products</Link>
          </li>
          <li className="mx-4 hover:text-[#6d9bc3]">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="mx-4 hover:text-[#6d9bc3]">
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
