"use client"
import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const FilterSelect = ({ dataValueArray, nestedSelectedValue, setNestedSelectedValue }) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
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

    const handleNestedMenu = (name) => {
        console.log("value", name)
    }

    return (
        <div ref={wrapperRef} className='relative w-full'>
            <Button variant="outlined" onClick={() => setDropDownOpen(!dropDownOpen)} className='text-[#4680FF] font-inter font-normal text-[14px] border-[#4680FF] rounded-md capitalize w-full flex justify-start'>Select Value {dropDownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</Button>
            {
                dropDownOpen && <div className='absolute z-10 bg-[#F8F9FA] py-3 rounded shadow-lg w-fill'>
                    {
                        dataValueArray?.map((item, index) => {
                            return (
                                <div key={index} className='flex gap-3 justify-between hover:bg-[#EFEFEF] py-2 px-3 cursor-pointer' onClick={() => handleNestedMenu(item)}

                                >
                                    <label className='text-[#1E1E1E] font-inter font-semibold text-sm cursor-pointer' >{item}</label>
                                    <KeyboardArrowRightIcon fontSize='small' className='text-[#5B6B79]' />
                                </div>

                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default FilterSelect
