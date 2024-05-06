"use client"
import { FormControl, MenuItem, Select } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles({
    root: {
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none !important',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none !important',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none !important',
        }
    },
});

const CustomSelect = ({ value, handleChange, menuList, width, textColor, borderColor ,IconComponent}) => {
    const classes = useStyles();

    return (
        <FormControl className={classes.root} sx={{ minWidth: width }}>
            <Select
                value={value}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                style={{ color: textColor, border: `1px solid ${borderColor}` }}
                className={`capitalize font-medium text-[14px]`}
                size='small'
                IconComponent={IconComponent}
            >
                {
                    menuList?.map((item, index) => {
                        return (
                            <MenuItem key={index} value={item} className='capitalize text-[#1E1E1E] dark:text-white font-medium text-[14px]'>{item}</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}

export default CustomSelect
