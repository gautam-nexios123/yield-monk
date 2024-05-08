"use client"
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import CustomSelect from '@/common/CustomSelect';
import CustomDateRangePicker from '@/components/dashboard/CustomDateRangePicker';
import EstimatedRevenu from '@/components/dashboard/EstimatedRevenu';
import PerfomanceOverView from '@/components/dashboard/PerfomanceOverView';
import NetworkRevenue from '@/components/dashboard/NetworkRevenue';
import CountryWise from '@/components/dashboard/CountryWise';
import DeviceWise from '@/components/dashboard/DeviceWise';
import SiteWiseTable from '@/components/dashboard/SiteWiseTable';
import LineChart from '@/components/LineChart';

const categoriesMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", "Nov", "Dec"]
const seriesData = [{
    name: 'YieldMonk',
    data: [150, 180, 210, 190, 220, 200, 250, 280, 300, 270, 260, 240]
},
{
    name: 'Original',
    data: [40, 50, 55, 59, 49, 80, 70, 85, 110, 95, 60, 75]
}]

const colors = ["#E58A00", '#4680FF']
const Dashboard = () => {

    const [linkAll, setLinkAll] = useState('all');
    const [day, setDay] = useState('today');
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleChangeAll = (event) => {
        setLinkAll(event.target.value);
    };
    const handleChangeDay = (event) => {
        setDay(event.target.value);
    };

    return (
        <div className='w-full relative bg-white dark:bg-[#1E1E1E] px-[25px] my-[31px]'>
            <div className='w-full flex items-center justify-between border border-[#EFEFEF] p-[16px] rounded-lg'>
                <div className='font-sans font-bold text-xl flex items-center gap-2'>
                    <ArrowBackIcon className='cursor-pointer' /> Welcome, Name!
                </div>
                <Button variant="outlined" className='text-[#262626] dark:text-white font-sans font-normal text-[14px] border-[#D9D9D9] capitalize'>Export</Button>
            </div>
            <div className='w-full mt-[17px] mb-[26px]'>
                <div className='flex flex-col md:flex-row gap-[24px] justify-end'>
                    <CustomSelect value={linkAll} handleChange={handleChangeAll} menuList={["all", "one", "two"]} width={70} textColor={"#1E1E1E"} borderColor={"#DBE0E5"} />
                    <CustomDateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
                    <CustomSelect value={day} handleChange={handleChangeDay} menuList={["today", "yesterday", "last 7 days", "last 30 days", "this month", "last month"]} width={100} textColor={"#1E1E1E"} borderColor={"#DBE0E5"} />
                </div>
            </div>
            <EstimatedRevenu />
            <div className='my-[26px]'>
                <LineChart categories={categoriesMonth} topLabels={true} seriesData={seriesData} colors={colors} />
            </div>

            <SiteWiseTable />

            <PerfomanceOverView />
            <NetworkRevenue />
            <div className='w-full flex flex-col lg:flex-row gap-[22px]'>
                <div className='w-full lg:w-[50%]'>
                    <DeviceWise />
                </div>
                <div className='w-full lg:w-[50%]'>
                    <CountryWise />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
