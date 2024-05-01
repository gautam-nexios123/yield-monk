"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Logo from "../../assets/icons/Logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { openClodeDrawerAction } from '@/Redux/DashboardSiderbar/DashboardSiderbarSlice';
import { usePathname } from 'next/navigation';
import sunIcon from "../../assets/dashboard/sun.svg"
import notiIcon from "../../assets/dashboard/notification-status.svg"
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  const { isOpen } = useSelector((state) => state?.sidebarDrawer);
  const dispatch = useDispatch();
  const pathName = usePathname();

  const [isSticky, setIsSticky] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const contentHideShow = () => {
    if (pathName === "/" || pathName === "/signup" || pathName === "/login" || pathName === "/create-organization" || pathName === "/reset-password" || pathName === "/email-verification") {
      setShowContent(false);
    } else {
      setShowContent(true)
    }
  }

  useEffect(() => {
    contentHideShow()
  }, [pathName]);

  useEffect(() => {
    if (typeof window !== "undefined") {

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleScroll = () => {
    if (typeof window !== "undefined" && window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <div className={`w-full h-[74px] py-5 px-[20px] bg-white ${isSticky ? "sticky top-0  z-[9999] " : ""
      } transition-all duration-500 shadow-lg`}>

      <div className='w-full flex items-center justify-between'>
        <div className='flex gap-2 items-center'>
          {
            showContent && <div onClick={() => dispatch(openClodeDrawerAction(!isOpen))}>
              <MenuIcon className='text-[30px] mr-2 cursor-pointer' />
            </div>
          }
          <Image src={Logo} width={50} height={40} alt='logo' ></Image>
          <p className='hidden sm:block font-inter font-normal text-[32px] text-black'>YieldMonk</p>
        </div>

        {
          showContent && <div className='flex items-center gap-[20px]'>
            <Image src={sunIcon} alt='sunIcon' width={24} height={24} className='cursor-pointer' />
            <Image src={notiIcon} alt='notiIcon' width={24} height={24} className='cursor-pointer' />
            <div className='relative'>
              <NotificationsIcon color='action' />
              <div className='absolute top-[-10px] right-[-8px] bg-[#4680FF] w-[20px] h-[20px] flex items-center justify-center rounded-full text-white text-xs'>9</div>
            </div>
            <div className='w-[44px] h-[44px] bg-[#7EA6FF] rounded-full'></div>
          </div>
        }

      </div>

    </div>
  )
}

export default Header
