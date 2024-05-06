import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircleIcon from '@mui/icons-material/Circle';
import PieChart from './PieChart';

const NetworkRevenue = () => {

    return (
        <div className='border border-[#EFEFEF] rounded-lg p-[20px] my-[26px]'>
            <div className='flex items-center justify-between'>
                <MoreVertIcon className='text-[#5B6B79] cursor-pointer' />
                <div className='text-[#1D2630] dark:text-white font-semibold font-inter text-base'>Network Wise Revenue</div>
                <div className='text-[#4680FF] font-normal font-inter text-sm cursor-pointer'>View Reports</div>
            </div>
            <div className='w-[100%] flex items-center justify-center mt-[41px]'>
                <PieChart series = {[10, 40 , 20 ,10 , 15 , 5]} labels = {['A', 'B' , "C" , "D" ,"E" , "F"]} colors={['#1D2630', '#4680FF', '#6293FF', '#CFD1D4', '#5B6B79', '#5B6B79']} />
            </div>
            <div className='flex flex-col flex-wrap sm:flex-row items-center justify-between gap-[20px] w-full mt-[40px]'>
                <div className='border border-[#DBE0E5] rounded p-[20px] w-full md:w-[48%] xl:w-[32%]'>
                    <div className='text-[#5B6B79] dark:text-white font-inter font-medium text-sm pb-[5px] text-center'>
                        <CircleIcon className={`text-[8px] text-[#1D2630] mr-2`} />
                        Pubmatic(HB)
                    </div>
                    <div className='text-[#1D2630] font-inter font-semibold text-base text-center'>10%</div>
                </div>
                <div className='border border-[#DBE0E5] rounded p-[20px] w-full md:w-[48%] xl:w-[32%]'>
                    <div className='text-[#5B6B79] dark:text-white font-inter font-medium text-sm pb-[5px] text-center'>
                        <CircleIcon className={`text-[8px] text-[#4680FF] mr-2`} />
                        Adx(DA)
                    </div>
                    <div className='text-[#1D2630] font-inter font-semibold text-base text-center'>40%</div>
                </div>
                <div className='border border-[#DBE0E5] rounded p-[20px] w-full md:w-[48%] xl:w-[32%]'>
                    <div className='text-[#5B6B79] dark:text-white font-inter font-medium text-sm pb-[5px] text-center'>
                        <CircleIcon className={`text-[8px] text-[#6293FF] mr-2`} />
                        Index Exchange(HB)
                    </div>
                    <div className='text-[#1D2630] font-inter font-semibold text-base text-center'>20%</div>
                </div>
                <div className='border border-[#DBE0E5] rounded p-[20px] w-full md:w-[48%] xl:w-[32%]'>
                    <div className='text-[#5B6B79] dark:text-white font-inter font-medium text-sm pb-[5px] text-center'>
                        <CircleIcon className={`text-[8px] text-[#CFD1D4] mr-2`} />
                        Teads(HB)
                    </div>
                    <div className='text-[#1D2630] font-inter font-semibold text-base text-center'>10%</div>
                </div>
                <div className='border border-[#DBE0E5] rounded p-[20px] w-full md:w-[48%] xl:w-[32%]'>
                    <div className='text-[#5B6B79] dark:text-white font-inter font-medium text-sm pb-[5px] text-center'>
                        <CircleIcon className={`text-[8px] text-[#5B6B79] mr-2`} />
                        Share Through(HB)
                    </div>
                    <div className='text-[#1D2630] font-inter font-semibold text-base text-center'>15%</div>
                </div>
                <div className='border border-[#DBE0E5] rounded p-[20px] w-full md:w-[48%] xl:w-[32%]'>
                    <div className='text-[#5B6B79] dark:text-white font-inter font-medium text-sm pb-[5px] text-center'>
                        <CircleIcon className={`text-[8px] text-[#5B6B79] mr-2`} />
                        App Nexus(HB)
                    </div>
                    <div className='text-[#1D2630] font-inter font-semibold text-base text-center'>5%</div>
                </div>
            </div>
        </div>
    )
}

export default NetworkRevenue
