"use client"
import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const CustomMultiSelect = ({ dataValueArray, selctedValue, setSelectedValue, checkBoxShox }) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    console.log("oselctedValuebject",selctedValue)
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setDropDownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

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
        <div ref={wrapperRef} className='relative'>
            <Button variant="outlined" onClick={() => setDropDownOpen(!dropDownOpen)} className='text-[#4680FF] font-inter font-normal text-[14px] border-[#4680FF] rounded-md capitalize'>Select Value {dropDownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</Button>
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
