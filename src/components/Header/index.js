"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Logo from "../../assets/icons/Logo.svg"

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <div  className={`w-full h-[74px] py-5 px-10 bg-white ${
      isSticky ? "sticky top-0  z-[9999] " : ""
    } transition-all duration-500 shadow-lg`}>
          <div className='flex gap-2'>
              <Image src={Logo} width={50} height={40} ></Image>
              <p className='font-inter font-normal text-[32px] text-black'>YieldMonk</p>
          </div>
    </div>
  )
}

export default Header
