"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Logo from "../../assets/icons/Logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { openClodeDrawerAction } from '@/Redux/DashboardSiderbar/DashboardSiderbarSlice';

const Header = () => {
  const { isOpen } = useSelector((state) => state?.sidebarDrawer);
  const dispatch = useDispatch();
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
    <div className={`w-full h-[74px] py-5 px-[20px] bg-white ${isSticky ? "sticky top-0  z-[9999] " : ""
      } transition-all duration-500 shadow-lg`}>
      <div className='flex gap-2 items-center'>
        <div onClick={() => dispatch(openClodeDrawerAction(!isOpen))}>
          <MenuIcon className='text-[30px] mr-2 cursor-pointer' />
        </div>
        <Image src={Logo} width={50} height={40} alt='logo' ></Image>
        <p className='font-inter font-normal text-[32px] text-black'>YieldMonk</p>
      </div>
    </div>
  )
}

export default Header
