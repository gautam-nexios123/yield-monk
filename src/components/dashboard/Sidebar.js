"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import dashboardIcon from "../../assets/dashboard/speedometer-selected.svg";
import docIcon from "../../assets/dashboard/document.svg";
import docIconSelected from "../../assets/dashboard/document-selected.svg";
import reportIcon from "../../assets/dashboard/report-icon.svg";
import reportIconSelected from "../../assets/dashboard/report-icon-selected.svg";
import profileIcon from "../../assets/dashboard/profile.svg";
import profileIconSelected from "../../assets/dashboard/profile-selected.svg";
import gamIcon from "../../assets/dashboard/gam-icon.svg";
import gamIconSelected from "../../assets/dashboard/gam-icon-selected.svg";
import filterNone from "../../assets/dashboard/filter_none.svg";
import filterNoneSelected from "../../assets/dashboard/filter_none-selected.svg";
import lockIcon from "../../assets/dashboard/lock_outline.svg";
import lockIconSelecter from "../../assets/dashboard/lock_outline-selected.svg";
import emailIcon from "../../assets/dashboard/email.svg";
import emailIconSelected from "../../assets/dashboard/email-selected.svg";
import chatIcon from "../../assets/dashboard/chat_bubble_outline.svg";
import chatIconSelected from "../../assets/dashboard/chat_bubble_outline-selected.svg";
import logoutIcon from "../../assets/dashboard/logout.svg";
import Drawer from '@mui/material/Drawer';
import { openClodeDrawerAction } from '@/Redux/DashboardSiderbar/DashboardSiderbarSlice';

const drawerWidth = 245;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    position: "relative",
    backgroundColor: "white",
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    paddingTop: "3px",
    minHeight: "80vh"
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `100px`,
    [theme.breakpoints.up('sm')]: {
        width: `100px`,
    },
    position: "relative",
    backgroundColor: "white",
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    paddingTop: "3px",
    minHeight: "80vh"

});

const PerMentDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Sidebar = () => {
    const { isOpen } = useSelector((state) => state?.sidebarDrawer);

    const dispatch = useDispatch();
    return (
        <>
            <PerMentDrawer variant='permanent' open={isOpen} className='hidden lg:block'>
                <MenuList isOpen={isOpen} />
            </PerMentDrawer>
            <Drawer open={isOpen} onClose={() => dispatch(openClodeDrawerAction(!isOpen))} className='block lg:hidden'>
                <MenuList isOpen={isOpen} />
            </Drawer>
        </>
    )
}

export default Sidebar

const MenuList = ({ isOpen }) => {
    const [isHovered, setIsHovered] = useState(null);
    return (
        <div className={`px-[20px] py-[20px] flex flex-col ${!isOpen && "items-center"}`}>

            {isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] bg-[#EDF3FF] rounded-lg text-[#4680FF] flex items-center gap-2`}>
                <Image src={dashboardIcon} alt='dashboardIcon' width={18} height={18} />
                Dashboard
            </div> : <div className={`w-[38px] h-[38px] bg-[#EDF3FF] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`}><Image src={dashboardIcon} alt='dashboardIcon' width={18} height={18} /></div>
            }

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2 hover:text-[#4680FF] hover:bg-[#EDF3FF]`} onMouseEnter={() => setIsHovered("mySites")}
                    onMouseLeave={() => setIsHovered(null)} >
                    <Image src={isHovered === "mySites" ? docIconSelected : docIcon} alt='docIcon' width={18} height={18} />
                    My Sites
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`} onMouseEnter={() => setIsHovered("mySites")}
                    onMouseLeave={() => setIsHovered(null)} ><Image src={isHovered === "mySites" ? docIconSelected : docIcon} alt='docIcon' width={18} height={18} /></div>
            }

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2  hover:text-[#4680FF] hover:bg-[#EDF3FF]`} onMouseEnter={() => setIsHovered("reports")}
                    onMouseLeave={() => setIsHovered(null)} >
                    <Image src={isHovered === "reports" ? reportIconSelected : reportIcon} alt='report' width={18} height={18} />
                    Reports
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`} onMouseEnter={() => setIsHovered("reports")}
                    onMouseLeave={() => setIsHovered(null)} ><Image src={isHovered === "reports" ? reportIconSelected : reportIcon} alt='report' width={18} height={18} /></div>
            }

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2  hover:text-[#4680FF] hover:bg-[#EDF3FF]`} onMouseEnter={() => setIsHovered("adstxtmgt")}
                    onMouseLeave={() => setIsHovered(null)} >
                    <Image src={isHovered === "adstxtmgt" ? profileIconSelected : profileIcon} alt='profileIcon' width={18} height={18} />
                    Ads.txt management
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`} onMouseEnter={() => setIsHovered("adstxtmgt")}
                    onMouseLeave={() => setIsHovered(null)}><Image src={isHovered === "adstxtmgt" ? profileIconSelected : profileIcon} alt='profileIcon' width={18} height={18} /></div>
            }

            {isOpen && <div className='font-inter text-[#1D2630] font-bold text-sm px-[14px] py-[12px]'>Integrations</div>}

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2  hover:text-[#4680FF] hover:bg-[#EDF3FF]`} onMouseEnter={() => setIsHovered("gam")}
                    onMouseLeave={() => setIsHovered(null)} >
                    <Image src={isHovered === "gam" ? gamIconSelected : gamIcon} alt='gam' width={18} height={18} />
                    GAM
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`} onMouseEnter={() => setIsHovered("gam")}
                    onMouseLeave={() => setIsHovered(null)} ><Image src={isHovered === "gam" ? gamIconSelected : gamIcon} alt='gam' width={18} height={18} /></div>
            }

            {isOpen && <div className='font-inter text-[#1D2630] font-bold text-sm px-[14px] py-[12px]'>Payments</div>}

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2 hover:text-[#4680FF] hover:bg-[#EDF3FF]`} onMouseEnter={() => setIsHovered("transaction")}
                    onMouseLeave={() => setIsHovered(null)} >
                    <Image src={isHovered === "transaction" ? filterNoneSelected : filterNone} alt='filter' width={18} height={18} />
                    Transactions
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`} onMouseEnter={() => setIsHovered("transaction")}
                    onMouseLeave={() => setIsHovered(null)}><Image src={isHovered === "transaction" ? filterNoneSelected : filterNone} alt='filter' width={18} height={18} /></div>
            }

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2  hover:text-[#4680FF] hover:bg-[#EDF3FF]`} onMouseEnter={() => setIsHovered("accountdetails")}
                    onMouseLeave={() => setIsHovered(null)} >
                    <Image src={isHovered === "accountdetails" ? lockIconSelecter : lockIcon} alt='lock' width={18} height={18} />
                    Account Details
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`} onMouseEnter={() => setIsHovered("accountdetails")}
                    onMouseLeave={() => setIsHovered(null)}><Image src={isHovered === "accountdetails" ? lockIconSelecter : lockIcon} alt='lock' width={18} height={18} /></div>
            }

            {isOpen && <div className='font-inter text-[#1D2630] font-bold text-sm px-[14px] py-[12px]'>Support</div>}

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2  hover:text-[#4680FF] hover:bg-[#EDF3FF]`} onMouseEnter={() => setIsHovered("email")}
                    onMouseLeave={() => setIsHovered(null)} >
                    <Image src={isHovered === "email" ? emailIconSelected : emailIcon} alt='emailIcon' width={18} height={18} />
                    Email
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`} onMouseEnter={() => setIsHovered("email")}
                    onMouseLeave={() => setIsHovered(null)}><Image src={isHovered === "email" ? emailIconSelected : emailIcon} alt='emailIcon' width={18} height={18} /></div>
            }

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2  hover:text-[#4680FF] hover:bg-[#EDF3FF]`} onMouseEnter={() => setIsHovered("faq")}
                    onMouseLeave={() => setIsHovered(null)} >
                    <Image src={isHovered === "faq" ? chatIconSelected : chatIcon} alt='faqs' width={18} height={18} />
                    FAQs
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`} onMouseEnter={() => setIsHovered("faq")}
                    onMouseLeave={() => setIsHovered(null)}><Image src={isHovered === "faq" ? chatIconSelected : chatIcon} alt='faqs' width={18} height={18} /></div>
            }
            <Image src={logoutIcon} alt='logout' width={25} height={25} className='cursor-pointer absolute bottom-[5%]' />
        </div>
    )
}
