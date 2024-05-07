"use client"
import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CustomMultiSelect from './CustomMultiSelect';

const multiSelectData = [
    'www.google.com',
    'www.watch.com'
]

const FilterSelect = ({ dataValueArray, nestedSelectedValue, setNestedSelectedValue }) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [multiDropDownOpen, setMultiDropDownOpen] = useState(false);

    const [multiSelectValue, setMultiSelectValue] = useState([])
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setDropDownOpen(false);
                setMultiDropDownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const handleNestedMenu = (name) => {
        setDropDownOpen(true);
        setMultiDropDownOpen(!multiDropDownOpen);
    }

    const handleChacked = (e) => {
        const valueChecked = e.target.value;
        if (multiSelectValue?.some((item) => item === valueChecked)) {
            const filterSelectedData = multiSelectValue?.filter((itm) => itm !== valueChecked);
            setMultiSelectValue(filterSelectedData)
        } else {
            setMultiSelectValue([...multiSelectValue, valueChecked])
        }
    }

    return (
        <>
            <div ref={wrapperRef} className='relative w-full'>
                <Button variant="outlined" onClick={() => setDropDownOpen(!dropDownOpen)} className='text-[#4680FF] font-inter font-normal text-[14px] border-[#4680FF] rounded-md capitalize w-full flex justify-start'>Select Value {dropDownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</Button>
                {
                    dropDownOpen && <div className='absolute z-10 bg-[#F8F9FA] py-3 rounded shadow-lg w-fill'>
                        {
                            dataValueArray?.map((item, index) => {
                                return (
                                    <div key={index} className='flex gap-3 justify-between hover:bg-[#EFEFEF] py-2 px-3 cursor-pointer' onClick={() => handleNestedMenu(item)}

                                    >
                                        <label className='text-[#1E1E1E] font-inter font-semibold text-sm cursor-pointer'>{item}</label>
                                        <KeyboardArrowRightIcon fontSize='small' className='text-[#5B6B79]' />
                                    </div>

                                )
                            })
                        }
                    </div>
                }

                {
                    multiDropDownOpen && <div className='absolute z-10 bg-[#F8F9FA] dark:bg-white p-3 rounded shadow-lg right-0 top-[80px] !w-[250px]'>
                        {
                            multiSelectData?.map((item, index) => {
                                return (
                                    <div key={index} className='flex gap-3 hover:bg-[#EFEFEF] py-2 px-3'>
                                        <input type='checkbox' className='cursor-pointer' id={item} value={item} checked={multiSelectValue?.some((val) => val === item)} onChange={(e) => handleChacked(e)} />
                                        <label className='text-[#1E1E1E] font-inter font-semibold text-sm cursor-pointer' htmlFor={item}>{item}</label>
                                    </div>

                                )
                            })
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default FilterSelect
