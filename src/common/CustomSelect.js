"use client"
import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'

const CustomSelect = ({ value, handleChange, menuList ,width }) => {
    return (
        <FormControl sx={{ minWidth : width }}>
            <Select
                value={value}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='capitalize text-[#1E1E1E] font-medium text-[14px]'
                size='small'
            >
                {
                    menuList?.map((item, index) => {
                        return (
                            <MenuItem key={index} value={item} className='capitalize text-[#1E1E1E] font-medium text-[14px]'>{item}</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}

export default CustomSelect
