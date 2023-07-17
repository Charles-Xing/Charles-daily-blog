import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../public/myPhoto.jpg";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/MyPhoto.jpg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>Charles&apos; Blog</h1>
      </div>

      <div>
        <Link
          href=""
          className="px-5 py-3 text-sm bg-gray-900 md:text-base text-[#F2780D] flex items-center rounded-full text-center"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Header;
