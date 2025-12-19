"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/Logo.png";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // clear previous debounce
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        if (currentY > lastScrollY.current && currentY > 100)
          setVisible(false); // scrolling down
        else setVisible(true); // scrolling

        lastScrollY.current = currentY;
      }, 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-ivory shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="p-2 md:px-4 lg:px-8 md:py-4">
        <Link href="/">
          <Image
            src={Logo}
            alt="Anuj & Mehak Logo"
            width={70}
            height={70}
            className="h-auto w-16 md:w-20 object-contain hover:scale-110 transition-transform duration-300"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
