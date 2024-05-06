import React from 'react'
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionIcon from '@mui/icons-material/Description';

const PerfomanceOverView = () => {
    return (
        <div className='w-full border border-[#DBE0E5] rounded-lg p-[20px]'>
            <div className='text-black dark:text-white font-inter font-medium text-sm text-center pb-5'>Performance : Overview</div>
            <div className='flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 w-full mb-[20px]'>
                <div className='border border-[#DBE0E5] rounded p-[20px] flex items-center justify-between w-full sm:w-[32%]'>
                    <div>
                        <div className='text-[#1D2630] dark:text-white font-inter font-medium text-xl pb-[5px]'>
                            $24.23
                        </div>
                        <div className='text-[#5B6B79] font-inter font-medium text-sm'>Net Revenue</div>
                    </div>
                    <div>
                        <BarChartIcon fontSize='large' className='text-[#5B6B79]' />
                    </div>
                </div>
                <div className='border border-[#DBE0E5] rounded p-[20px] flex items-center justify-between w-full sm:w-[32%]'>
                    <div>
                        <div className='text-[#1D2630] dark:text-white font-inter font-medium text-xl pb-[5px]'>
                            275,595
                        </div>
                        <div className='text-[#5B6B79] font-inter font-medium text-sm'>YM Page Views</div>
                    </div>
                    <div>
                        <CalendarTodayIcon fontSize='large' className='text-[#FF4D4F]' />
                    </div>
                </div>
                <div className='border border-[#DBE0E5] rounded p-[20px] flex items-center justify-between w-full sm:w-[32%]'>
                    <div>
                        <div className='text-[#1D2630] dark:text-white font-inter font-medium text-xl pb-[5px]'>
                            $0.09
                        </div>
                        <div className='text-[#5B6B79] font-inter font-medium text-sm'>YM Page RPM</div>
                    </div>
                    <div>
                        <DescriptionIcon fontSize='large' className='text-[#52C41A]' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-[30px] w-full'>
                <div className='border border-[#DBE0E5] rounded p-[20px] flex items-center justify-between w-full sm:w-[32%]'>
                    <div>
                        <div className='text-[#1D2630] dark:text-white font-inter font-medium text-xl pb-[5px]'>
                            153,831
                        </div>
                        <div className='text-[#5B6B79] font-inter font-medium text-sm'>Impressions</div>
                    </div>
                    <div>
                        <BarChartIcon fontSize='large' className='text-[#5B6B79]' />
                    </div>
                </div>
                <div className='border border-[#DBE0E5] rounded p-[20px] flex items-center justify-between w-full sm:w-[32%]'>
                    <div>
                        <div className='text-[#1D2630] dark:text-white font-inter font-medium text-xl pb-[5px]'>
                            $0.16
                        </div>
                        <div className='text-[#5B6B79] font-inter font-medium text-sm'>Ad eCPM</div>
                    </div>
                    <div>
                        <CalendarTodayIcon fontSize='large' className='text-[#FF4D4F]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PerfomanceOverView
