"use client";
import { Button } from '@mui/material'
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomMultiSelect from '@/common/CustomMultiSelect';
import CustomSelect from '@/common/CustomSelect';
import CustomDateRangePicker from '@/components/dashboard/CustomDateRangePicker';

const dataValueArray = [
    'Site',
    'Page Group',
    'Page Variation',
    'Page Variation Type',
    'Device',
    'Traffic Channel',
    'Ad Unit',
    'Network',
    'Ad Unit Type',
    'Country',
    'Revenue Channel',
    'Ad Format Type',
];

const Reports = () => {
    const [selctedValue, setSelectedValue] = useState([]);

    const [interVal, setInterVal] = useState('Daily');

    const handleChangeAll = (event) => {
        setInterVal(event.target.value);
    };

    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    return (
        <div className='w-full relative bg-white px-[25px] my-[31px]'>
            <div className='w-full flex items-center justify-between border border-[#EFEFEF] p-[16px] rounded-lg'>
                <div className='font-sans font-bold text-xl flex items-center gap-2'>
                    <ArrowBackIcon className='cursor-pointer' />Reports
                </div>
                <Button variant="outlined" className='text-[#262626] font-sans font-normal text-[14px] border-[#D9D9D9] capitalize'>Export</Button>
            </div>
            <div className='flex flex-col sm:flex-row justify-between gap-[20px] sm:items-center mt-[35px]'>
                <div className=''>
                    <div className='text-[#s000000] font-inter font-medium text-sm pb-4'>Report By</div>
                    <CustomMultiSelect dataValueArray={dataValueArray} selctedValue={selctedValue} setSelectedValue={setSelectedValue} checkBoxShox={true} />
                </div>
                <div className=''>
                    <div className='text-[#s000000] font-inter font-medium text-sm pb-4'>Interval</div>
                    <CustomSelect value={interVal} handleChange={handleChangeAll} menuList={["Daily", "Monthly", "Cumulative"]} width={90} textColor={"#4680FF"} borderColor={"#4680FF"} />
                </div>
                <div className=''>
                    <div className='text-[#s000000] font-inter font-medium text-sm pb-4'>Date Range</div>
                    <CustomDateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
                </div>
            </div>
        </div>
    )
}

export default Reports
