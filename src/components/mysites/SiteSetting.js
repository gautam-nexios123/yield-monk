"use client"
import CustomSelect from '@/common/CustomSelect'
import { Button, FormControl, OutlinedInput, TextareaAutosize } from '@mui/material'
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WestIcon from '@mui/icons-material/West';


const SiteSetting = ({ scriptValueSetting, setScriptValueSetting, handleCopyCodeVerifySetting, setManageSiteFlag }) => {
    const [statusSetting, setStatusSetting] = useState("Append");

    const handleChangeAll = (event) => {
        setStatusSetting(event.target.value);
    };

    return (
        <div className='w-full  relative bg-white dark:bg-[#1E1E1E] px-[0px] my-[31px]'>
            <div className='w-full border  border-[#EFEFEF] px-[20px] py-[40px] rounded-lg'>
                <p className='text-[20px] text-[#1D2630] dark:text-white font-inter font-medium'>YM Head Code</p>
                <p className='text-[14px] text-[#5B6B79] font-inter font-normal'>Copy and paste this snippet in the head tag of your website</p>
                <div className='flex mt-8 flex-col md:flex-row'>
                    <FormControl sx={{ width: '100%', }} >
                        <TextareaAutosize
                            id="org-name"
                            aria-describedby="org-name-helper"
                            inputProps={{
                                'aria-label': 'organisation name',
                            }}
                            style={{ borderRadius: "8px ", border: "1px solid #EAEAEA", padding: "10px" }}
                            placeholder='script code'
                            onChange={(e) => setScriptValueSetting(e.target.value)}
                            rowsMin={3}
                            value={scriptValueSetting}

                        />
                    </FormControl>
                </div>

                <Button variant='outlined' className='w-[107px] h-[40px] px-[16px] py-[9x] rounded-full capitalize mt-5' onClick={handleCopyCodeVerifySetting}>Copy Code</Button>
                <div className='mt-10'>
                    <p className='text-[20px] text-[#1D2630] dark:text-white font-inter font-medium'>Manager Block List</p>
                    <p className='text-[14px] text-[#5B6B79] font-inter font-normal mt-2'>Block Yield Monk ads on selected URLs of the website</p>

                    <div className='flex gap-5 mt-8 flex-col md:flex-row'>
                        <FormControl sx={{ width: '50%', }} variant="outlined">
                            <OutlinedInput
                                id="org-name"
                                aria-describedby="org-name-helper"
                                inputProps={{
                                    'aria-label': 'organisation name',
                                }}
                                className='text-[#1D2630] dark:text-white'
                                sx={{ borderRadius: "8px !important", padding: "10px" }}
                                placeholder='Site Name'
                                value={"Enter comma separated URLs or URL patterns to block Yield Monk Ads"}
                            />
                        </FormControl>

                    </div>
                    <Button variant='outlined' className='px-[16px] py-[9x] rounded-full capitalize mt-5' >Add</Button>

                </div>
                <div className='mt-10'>
                    <p className='text-[20px] text-[#1D2630] dark:text-white font-inter font-medium'>Manage Refresh With Line Item IDs</p>
                    <p className='text-[14px] text-[#5B6B79] font-inter font-normal mt-2'>Block the following line item IDs from getting refreshed</p>
                    <div className='mt-3'>
                        <div className='flex gap-2 my-5 flex-col sm:flex-row'>
                            <Button variant='contained' className='rounded-lg bg-[#4680FF]'>Download Blocked List Line Items Sample</Button>
                            <Button variant='contained' className='rounded-lg bg-[#4680FF]'>Upload Blocked List Line Items CSV</Button>
                        </div>
                        <CustomSelect IconComponent={KeyboardArrowDownIcon} width={"30%"} value={statusSetting} menuList={["Append", "Replace"]} textColor={"black"} borderColor={"#EFEFEF"} handleChange={handleChangeAll} />

                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-end gap-3 mt-6'>
                    <FormControl variant="outlined">
                        <Button variant="outlined" className='text-[#1D2630] dark:text-white font-inter font-medium rounded-lg py-2 text-[14px] border-[#D9D9D9] capitalize' startIcon={<WestIcon />} onClick={() => {
                            setManageSiteFlag(false)
                        }} >Back</Button>

                    </FormControl>
                    <FormControl>
                        <Button variant="contained" size='medium' className='bg-[#4680FF] rounded-lg py-2 px-6 capitalize' disableRipple={true} onClick={() => setManageSiteFlag(false)}>Done</Button>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default SiteSetting
