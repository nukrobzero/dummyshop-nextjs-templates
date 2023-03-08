import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#e7c9a9] flex flex-col md:flex-row justify-between items-center">
      <div className="md:ml-2">
        <Link href="/">
          <Image src="/dummy-logo.png" width={80} height={80} alt="logo" />
        </Link>
      </div>
      <div className="text-sm mr-2 mb-5 md:mb-0">
        &copy; 2023 Created By Nukrobzero. All rights reserved.
      </div>
    </footer>
  );
}
