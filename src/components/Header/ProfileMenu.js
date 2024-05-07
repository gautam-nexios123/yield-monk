import Image from 'next/image'
import React from 'react'
import Password from "../../assets/others/lock.svg";
import LeftArrow from "../../assets/others/leftarrow.svg";
import Setting from "../../assets/others/Setting.svg";
import { Button } from '@mui/material';
import Logout from "../../assets/others/logout.svg";
import Unlock from "../../assets/others/unlock.svg";


const ProfileMenu = () => {
    return (
        <div className='card bg-white absolute z-10 right-0 sm:right-2 w-[320px] sm:w-[352px] top-[56px] sm:top-[54px] h-auto rounded-xl p-5 shadow-lg select-none' >
            <p className='text-[20px] font-inter font-semibold text-[#1D2630] flex justify-center'>Profile</p>
            <div className='flex gap-3 mt-2'>
                <div className='w-[40px] h-[40px] bg-yellow-400 rounded-full'></div>
                <div className='w-[10px] h-[10px] bg-green-800 rounded-full absolute top-[88px] left-12'></div>

                <div >
                    <p className='text-[16px] font-inter font-semibold text-[#1D2630]'>My Name</p>
                    <p className='text-[12px] font-inter font-normal text-[#5B6B79]'>myname@gmail.com</p>
                </div>
            </div>
            <div className='mt-6 border-t-2 border-b-2 border-[#EFEFEF]' >
                <p className='text-[14px] font-inter font-normal text-[#5B6B79] mt-3'>Manage</p>
                <div className='flex gap-3 justify-between hover:bg-[#FAFAFA] p-3 rounded-xl mt-3 cursor-pointer'>
                    <div className='flex gap-3'>
                        <Image src={Setting} alt='setting' />
                        <p className='text-[14px] font-inter font-normal text-[#1D2630]'>Setting</p>
                    </div>
                    <Image src={LeftArrow} alt='ledtarrow' />
                </div>
                <div className='flex gap-3 justify-between mt-1 mb-3 hover:bg-[#FAFAFA] p-3 rounded-xl cursor-pointer'>
                    <div className='flex gap-3'>
                        <Image src={Password} alt='password' />
                        <p className='text-[14px] font-inter font-normal text-[#1D2630]'>Change Password</p>
                    </div>
                    <Image src={LeftArrow} alt='ledtarrow' />
                </div>
            </div>
            <div className='mt-2 border-t-2 border-[#EFEFEF]' >
                <Button variant='contained' className='bg-[#4680FF] h-[40px] rounded-full mt-2 w-full capitalize text-[14px] font-inter font-medium items-center' startIcon={<Image src={Logout} />} >Logout</Button>
            </div>
            <div className='bg-[#E9F0FF] p-[30px] rounded-xl mt-4'>
                <div className='flex justify-center'>

                    <Image src={Unlock} alt='unlock' />
                </div>
                <p className='text-[16px] font-inter font-semibold text-[#1D2630] mt-5 flex justify-center'>Unlock All Features</p>
                <p className='text-[12px] font-inter font-normal text-[#5B6B79] mt-2  flex justify-center'>Unlock All Features</p>
                <Button variant='contained' className='bg-[#4680FF] px-[16px] py-[9px] rounded-lg mt-3 w-full capitalize text-[14px] font-inter font-medium items-center' >Upgrade to premium</Button>

            </div>
        </div>
    )
}

export default ProfileMenu
