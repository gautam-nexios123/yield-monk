"use client"
import { muiSelectDarkTheme, muiSelectLightTheme } from '@/utils';
import { FormControl, MenuItem, Select, ThemeProvider, createTheme } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

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



const CustomSelect = ({ value, handleChange, menuList, width, textColor, borderColor,IconComponent }) => {
    const classes = useStyles();
    const [muiSelectFlag, setMuiSelectFlag] = useState(false);
    const {theme} = useTheme();

    useEffect(() => {
      setMuiSelectFlag(true);
    }, [])
    
    return (
        muiSelectFlag && <ThemeProvider theme={theme === "light" ? muiSelectLightTheme : muiSelectDarkTheme}>
        <FormControl className={classes.root} sx={{ minWidth: width }}>
            <Select
                value={value}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                style={{ border: `1px solid ${borderColor}` }}
                className={`capitalize font-medium text-[14px] text-[${textColor}] dark:text-white`}
                size='small'
                IconComponent={IconComponent}
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
        </ThemeProvider>
    )
}

export default CustomSelect
