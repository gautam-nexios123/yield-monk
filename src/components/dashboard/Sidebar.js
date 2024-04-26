"use client";
import React, { } from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import dashboardIcon from "../../assets/dashboard/speedometer-selected.svg";
import docIcon from "../../assets/dashboard/document.svg";
import reportIcon from "../../assets/dashboard/report-icon.svg";
import profileIcon from "../../assets/dashboard/profile.svg";
import gamIcon from "../../assets/dashboard/gam-icon.svg";
import filterNone from "../../assets/dashboard/filter_none.svg";
import lockIcon from "../../assets/dashboard/lock_outline.svg";
import emailIcon from "../../assets/dashboard/email.svg";
import chatIcon from "../../assets/dashboard/chat_bubble_outline.svg";
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
    return (
        <div className={`px-[20px] py-[20px] flex flex-col ${!isOpen && "items-center"}`}>

            {isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] bg-[#EDF3FF] rounded-lg text-[#4680FF] flex items-center gap-2`}>
                <Image src={dashboardIcon} alt='dashboardIcon' width={18} height={18} />
                Dashboard
            </div> : <div className={`w-[38px] h-[38px] bg-[#EDF3FF] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`}><Image src={dashboardIcon} alt='dashboardIcon' width={18} height={18} /></div>
            }

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2`}>
                    <Image src={docIcon} alt='docIcon' width={18} height={18} />
                    My Sites
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`}><Image src={docIcon} alt='docIcon' width={18} height={18} /></div>
            }

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2`}>
                    <Image src={reportIcon} alt='report' width={18} height={18} />
                    Reports
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`}><Image src={reportIcon} alt='report' width={18} height={18} /></div>
            }

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2`}>
                    <Image src={profileIcon} alt='profileIcon' width={18} height={18} />
                    Ads.txt management
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`}><Image src={profileIcon} alt='profileIcon' width={18} height={18} /></div>
            }

            {isOpen && <div className='font-inter text-[#1D2630] font-bold text-sm px-[14px] py-[12px]'>Integrations</div>}

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2`}>
                    <Image src={gamIcon} alt='gam' width={18} height={18} />
                    GAM
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`}><Image src={gamIcon} alt='gam' width={18} height={18} /></div>
            }

            {isOpen && <div className='font-inter text-[#1D2630] font-bold text-sm px-[14px] py-[12px]'>Payments</div>}

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2`}>
                    <Image src={filterNone} alt='filter' width={18} height={18} />
                    Transactions
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`}><Image src={filterNone} alt='filter' width={18} height={18} /></div>
            }

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2`}>
                    <Image src={lockIcon} alt='lock' width={18} height={18} />
                    Account Details
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`}><Image src={lockIcon} alt='lock' width={18} height={18} /></div>
            }

            {isOpen && <div className='font-inter text-[#1D2630] font-bold text-sm px-[14px] py-[12px]'>Support</div>}

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2`}>
                    <Image src={emailIcon} alt='emailIcon' width={18} height={18} />
                    Email
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`}><Image src={lockIcon} alt='emailIcon' width={18} height={18} /></div>
            }

            {
                isOpen ? <div className={`font-inter font-medium cursor-pointer text-[14px] py-[12px] px-[14px] rounded-lg text-[#5B6B79] flex items-center gap-2`}>
                    <Image src={chatIcon} alt='faqs' width={18} height={18} />
                    FAQs
                </div> : <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center my-[10px] cursor-pointer`}><Image src={chatIcon} alt='faqs' width={18} height={18} /></div>
            }
            <Image src={logoutIcon} alt='logout' width={25} height={25} className='cursor-pointer absolute bottom-[5%]' />
        </div>
    )
}
