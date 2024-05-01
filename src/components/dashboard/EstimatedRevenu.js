import Image from 'next/image'
import React from 'react'
import walletIcon from "../../assets/dashboard/wallet-2.svg";
import blueChart from "../../assets/dashboard/blue_chart.svg";
import blueArrow from "../../assets/dashboard/blue-arrow.svg";
import docTextIcon from "../../assets/dashboard/document-text.svg";
import yelloChart from "../../assets/dashboard/yellow-chart.png";
import yellowArrow from "../../assets/dashboard/yellow-right-arrow.svg";
import calendarIcon from "../../assets/dashboard/calendar.svg";
import greenChart from "../../assets/dashboard/green-chart.svg";
import greenRightArrow from "../../assets/dashboard/green-right-arrow.svg";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const EstimatedRevenu = () => {
    return (
        <div className='w-full pt-[20px] pb-[30px] px-[20px] border border-[#DBE0E5] rounded-lg'>
            <div className='text-[#000000] font-inter font-medium text-base text-center pb-[42px]'>Estimated Net Revenue</div>

            <div className='flex gap-4 items-center justify-center lg:justify-start flex-wrap'>
                <div className='p-[15px] border border-[#EFEFEF] rounded-lg'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#EDF3FF] w-[40px] h-[40px] rounded-lg p-[10px]'>
                            <Image src={walletIcon} alt='walletIcon' width={20} height={20} />
                        </div>
                        <div className='text-[#1D2630] font-inter font-medium text-[14px]'>Yesterday VS Same Day Last Week</div>
                        <MoreVertIcon fontSize='small' />
                    </div>
                    <div className='bg-[#F8F9FA] rounded-lg p-[15px] w-full flex items-center gap-4 mt-[15px]'>
                        <Image src={blueChart} alt='blueChart' width={100} height={48} />
                        <div className='bg-[#FFFFFF] rounded-lg py-2 px-[15px] w-full flex flex-col items-center shadow'>
                            <div className='text-[#1D2630] font-inter font-bold text-[14px] pb-2'>$3.17 / $3.81</div>
                            <div className='text-[#4680FF] font-medium text-xs font-inter flex items-center gap-2'>
                                <Image src={blueArrow} alt='blueArrow' width={16} height={16} />30.6%
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-[15px] border border-[#EFEFEF] rounded-lg'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#FFF5E5] w-[40px] h-[40px] rounded-lg p-[10px]'>
                            <Image src={docTextIcon} alt='docTextIcon' width={20} height={20} />
                        </div>
                        <div className='text-[#1D2630] font-inter font-medium text-[14px]'>Last 7 days VS Previous 7 days</div>
                        <MoreVertIcon fontSize='small' />
                    </div>
                    <div className='bg-[#F8F9FA] rounded-lg p-[15px] w-full flex items-center gap-4 mt-[15px]'>
                        <Image src={yelloChart} alt='yelloChart' width={100} height={48} />
                        <div className='bg-[#FFFFFF] rounded-lg py-2 px-[15px] w-full flex flex-col items-center shadow'>
                            <div className='text-[#1D2630] font-inter font-bold text-[14px] pb-2'>$24.23 / $27.06</div>
                            <div className='text-[#E58A00] font-medium text-xs font-inter flex items-center gap-2'>
                                <Image src={yellowArrow} alt='yellowArrow' width={16} height={16} />30.6%
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-[15px] border border-[#EFEFEF] rounded-lg'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#EBFAF5] w-[40px] h-[40px] rounded-lg p-[10px]'>
                            <Image src={calendarIcon} alt='calendarIcon' width={20} height={20} />
                        </div>
                        <div className='text-[#1D2630] font-inter font-medium text-[14px]'>Last 30 days VS Previous 30 days</div>
                        <MoreVertIcon fontSize='small' />
                    </div>
                    <div className='bg-[#F8F9FA] rounded-lg p-[15px] w-full flex items-center gap-4 mt-[15px]'>
                        <Image src={greenChart} alt='greenChart' width={100} height={48} />
                        <div className='bg-[#FFFFFF] rounded-lg py-2 px-[15px] w-full flex flex-col items-center shadow'>
                            <div className='text-[#1D2630] font-inter font-bold text-[14px] pb-2'>$132.38 / $142.23</div>
                            <div className='text-[#4CB592] font-medium text-xs font-inter flex items-center gap-2'>
                                <Image src={greenRightArrow} alt='greenRightArrow' width={16} height={16} />30.6%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EstimatedRevenu
