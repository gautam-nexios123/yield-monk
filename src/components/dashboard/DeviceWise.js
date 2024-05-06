import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DevicePieChart from './DevicePieChart';

const DeviceWise = () => {
    return (
        <div className='border border-[#EFEFEF] rounded-lg p-[20px] my-[26px]'>
            <div className='flex items-center justify-between'>
                <MoreVertIcon className='text-[#5B6B79] dark:text-white cursor-pointer' />
                <div className='text-[#1D2630] dark:text-white font-semibold font-inter text-base'>Device Wise</div>
                <div className='text-[#4680FF] font-normal font-inter text-sm cursor-pointer'>View Reports</div>
            </div>
            <div className='w-[100%] flex items-center justify-center mt-[24px] relative'>
                <DevicePieChart series={[52, 48, 46, 42]} labels={['A', 'B', "C", "D"]} colors={['#047BEA', '#F98600', '#15D28E', '#E6F3FF']} />
                <div className='absolute bg-white w-[150px] h-[150px] rounded-full shadow-2xl border-[6px] border-[#B2DAFE] flex items-center justify-center flex-col'>
                    <div className='text-[#1D2630] dark:text-white font-inter font-semibold text-xl pb-1'>$560</div>
                    <div className='text-[#5B6B79] font-inter font-medium text-sm'>Total income</div>
                </div>
            </div>
            <div className='flex flex-col flex-wrap sm:flex-row items-center justify-between gap-[20px] w-full'>
                <div className='bg-[#FAFAFA] rounded-md p-[20px] w-full md:w-[46%] xl:w-[48%]'>
                    <div className='text-[#5B6B79] font-inter font-medium text-sm pb-[10px]'>
                        <CircleIcon className={`text-[8px] text-[#047BEA] mr-2`} />
                        Mobile
                    </div>
                    <div className='text-[#1D2630] font-inter font-semibold text-base'>
                        $23,876
                        <span><ArrowDropUpIcon className='text-[#5B6B79]' /></span>
                        <span className='text-[#5B6B79] font-inter font-medium text-sm'>+$763,43</span>
                    </div>
                </div>
                <div className='bg-[#FAFAFA] rounded-md p-[20px] w-full md:w-[46%] xl:w-[48%]'>
                    <div className='text-[#5B6B79] font-inter font-medium text-sm pb-[10px]'>
                        <CircleIcon className={`text-[8px] text-[#F98600] mr-2`} />
                        Desktop
                    </div>
                    <div className='text-[#1D2630] font-inter font-semibold text-base'>
                        $23,876
                        <span><ArrowDropUpIcon className='text-[#5B6B79]' /></span>
                        <span className='text-[#5B6B79] font-inter font-medium text-sm'>+$763,43</span>
                    </div>
                </div>
                <div className='bg-[#FAFAFA] rounded-md p-[20px] w-full md:w-[46%] xl:w-[48%]'>
                    <div className='text-[#5B6B79] font-inter font-medium text-sm pb-[10px]'>
                        <CircleIcon className={`text-[8px] text-[#15D28E] mr-2`} />
                        Tablet
                    </div>
                    <div className='text-[#1D2630] font-inter font-semibold text-base'>
                        $23,876
                        <span><ArrowDropUpIcon className='text-[#5B6B79]' /></span>
                        <span className='text-[#5B6B79] font-inter font-medium text-sm'>+$763,43</span>
                    </div>
                </div>
                <div className='bg-[#FAFAFA] rounded-md p-[20px] w-full md:w-[46%] xl:w-[48%]'>
                    <div className='text-[#5B6B79] font-inter font-medium text-sm pb-[10px]'>
                        <CircleIcon className={`text-[8px] text-[#E6F3FF] mr-2`} />
                        Others
                    </div>
                    <div className='text-[#1D2630] font-inter font-semibold text-base'>
                        $23,876
                        <span><ArrowDropUpIcon className='text-[#5B6B79]' /></span>
                        <span className='text-[#5B6B79] font-inter font-medium text-sm'>+$763,43</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeviceWise
