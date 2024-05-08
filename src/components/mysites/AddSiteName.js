import { Button, FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import WestIcon from '@mui/icons-material/West';
import SiteName from "../../assets/mysites/sitename.svg";
import Home from "../../assets/mysites/home.svg";
import { useTheme } from 'next-themes';

const AddSiteName = ({ setNump1Comp, setAddFlag }) => {
    const { theme } = useTheme();
    return (
        <div className='px-[20px] py-[40px]'>
            <p className='font-inter font-medium text-[20px] text-[#1D2630] dark:text-white'>Add Website</p>
            <p className='font-inter text-[14px] font-normal text-[#5B6B79] mt-1'>Let us know the website on which you want to use AdPushup. If you have more than one site then you can easily add them later through the dashboard.</p>

            <div className='flex gap-5 mt-8 flex-col md:flex-row'>
                <FormControl sx={{ width: '100%', }} variant="outlined">
                    <OutlinedInput
                        id="org-name"
                        aria-describedby="org-name-helper"
                        inputProps={{
                            'aria-label': 'organisation name',
                        }}
                        sx={{ borderRadius: "8px !important", border: "2px solid #C0E5D9", padding: "22px 20px" }}
                        placeholder='Site Name'
                        className='text-black dark:text-white'
                        startAdornment={ // You can also use endAdornment if you want the icon on the right
                            <InputAdornment position="start">
                                <Image src={SiteName} alt='sitename' />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl sx={{ width: '100%', }} variant="outlined">
                    <OutlinedInput
                        id="org-name"
                        aria-describedby="org-name-helper"
                        inputProps={{
                            'aria-label': 'organisation name',
                        }}
                        sx={{ borderRadius: "8px !important", padding: "22px 20px", backgroundColor: theme === "light" ? "#FAFAFA" : "#1E1E1E", color: "#5B6B79" }}
                        placeholder='State'
                        value={"https://www.sitename.com"}
                        startAdornment={ // You can also use endAdornment if you want the icon on the right
                            <InputAdornment position="start">
                                <Image src={Home} alt='sitename' />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
            <div className='flex flex-col md:flex-row justify-end gap-3 mt-6'>
                <FormControl variant="outlined">
                    <Button variant="outlined" className='text-[#1D2630] dark:text-white font-inter font-medium rounded-lg py-2 text-[14px] border-[#D9D9D9] capitalize' startIcon={<WestIcon />} onClick={() => setAddFlag(false)} >Back</Button>

                </FormControl>
                <FormControl>
                    <Button variant="contained" size='medium' className='bg-[#4680FF] rounded-lg py-2 px-6 capitalize' disableRipple={true} onClick={() => setNump1Comp(true)}>Continue</Button>

                </FormControl>
            </div>
        </div>
    )
}

export default AddSiteName
