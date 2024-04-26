"use client"
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import CustomSelect from '@/common/CustomSelect';
import CustomDateRangePicker from '@/components/dashboard/CustomDateRangePicker';

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
        <div className='w-full relative bg-white mx-[25px] my-[31px]'>
            <div className='w-full flex items-center justify-between border border-[#EFEFEF] p-[16px] rounded-lg'>
                <div className='font-sans font-bold text-xl flex items-center gap-2'>
                    <ArrowBackIcon className='cursor-pointer' /> Welcome, Name!
                </div>
                <Button variant="outlined" className='text-[#262626] font-sans font-normal text-[14px] border-[#D9D9D9] capitalize'>Export</Button>
            </div>
            <div className='w-full mt-[17px] mb-[26px]'>
                <div className='flex gap-[24px] justify-end'>
                    <CustomSelect value={linkAll} handleChange={handleChangeAll} menuList={["all", "one", "two"]} width={70} />
                    <CustomDateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
                    <CustomSelect value={day} handleChange={handleChangeDay} menuList={["today", "yesterday", "last 7 days", "last 30 days", "this month", "last month"]} width={100} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
