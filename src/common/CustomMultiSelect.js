"use client"
import { Button } from '@mui/material';
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CustomMultiSelect = ({ dataValueArray, selctedValue, setSelectedValue, checkBoxShox }) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);

    const handleChacked = (e) => {
        const valueChecked = e.target.value;
        if (selctedValue?.some((item) => item === valueChecked)) {
            const filterSelectedData = selctedValue?.filter((itm) => itm !== valueChecked);
            setSelectedValue(filterSelectedData)
        } else {
            setSelectedValue([...selctedValue, valueChecked])
        }
    }

    return (
        <div className='relative'>
            <Button variant="outlined" onClick={() => setDropDownOpen(!dropDownOpen)} className='text-[#4680FF] font-inter font-normal text-[14px] border-[#4680FF] rounded-md capitalize'>Select Value <ArrowDropDownIcon /></Button>
            {
                dropDownOpen && <div className='absolute z-10 bg-[#F8F9FA] p-3 rounded shadow-lg !w-[250px]'>
                    {
                        dataValueArray?.map((item, index) => {
                            return (
                                <div key={index} className='flex gap-3 hover:bg-[#EFEFEF] py-2 px-3'>
                                   {checkBoxShox && <input type='checkbox' className='cursor-pointer' id={item} value={item} checked={selctedValue?.some((val) => val === item)} onChange={(e) => handleChacked(e)} />}
                                    <label className='text-[#1E1E1E] font-inter font-semibold text-sm cursor-pointer' htmlFor={item}>{item}</label>
                                </div>

                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default CustomMultiSelect
