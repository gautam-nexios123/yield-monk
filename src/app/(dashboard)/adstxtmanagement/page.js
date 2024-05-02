"use client"
import { Button, FormControl, TextareaAutosize } from '@mui/material'
import React, { useState } from 'react';
import WestIcon from '@mui/icons-material/West';

const tableData = [
    { "website": "https://www.sitename.com", "status": "Completed" },
    { "website": "https://www.sitename.com", "status": "Completed" },
    { "website": "https://www.sitename.com", "status": "Partial Content" },

]

const AdsTxtManagement = () => {

    const [entriesFlag, setEntriesFlag] = useState(false);
    const [scriptValueVerify, setScriptValueVerify] = useState(`yieldmonk.com, bf67f17dbf784c25a173f79d7d8efd45, DIRECT, b0b8ff8485794fdd 
    MANAGERDOMAIN=yieldmonk.com 
    OWNERDOMAIN=sitename.com`);
    const [scriptValueVerify1, setScriptValueVerify1] = useState(`#--------------------------------Yield Monk Start------------------------------------------#
    # VERSION 5.11
    # Last updated:10/02/2024
    # Yield Monk Ads.txt`);
    const [scriptValueVerify2, setScriptValueVerify2] = useState(`#--------------------------------Yield Monk Start------------------------------------------#
    # VERSION 5.11
    # Last updated:10/02/2024
    # Yield Monk Ads.txt`);

    // handleCopyCodeVerify1
    const handleCopyCodeVerify1 = () => {
        navigator.clipboard.writeText(scriptValueVerify)
            .then(() => {
                console.log('Script code copied to clipboard', scriptValueVerify);
            })
            .catch(err => {
                console.error('Failed to copy script code: ', err);
            });
    };



    // handleCopyCodeVerify2
    const handleCopyCodeVerify2 = () => {
        navigator.clipboard.writeText(scriptValueVerify1)
            .then(() => {
                console.log('Script code copied to clipboard', scriptValueVerify1);
            })
            .catch(err => {
                console.error('Failed to copy script code: ', err);
            });
    };

    // handleCopyCodeVerify3
    const handleCopyCodeVerify3 = () => {
        navigator.clipboard.writeText(scriptValueVerify2)
            .then(() => {
                console.log('Script code copied to clipboard', scriptValueVerify2);
            })
            .catch(err => {
                console.error('Failed to copy script code: ', err);
            });
    };

    return (
        <div className='w-full px-[10px] sm:px-[35px] py-[10px] sm:py-[26px]'>
            <p className='text-[16px] text-[#000000] font-medium font-inter'>Ads.txt Authenticator</p>
            {
                entriesFlag ?
                    <div >
                        <div className='relative bg-white my-[31px]  px-[20px] xl:px-[272px] py-[30px]'>
                            <div className='w-full border  border-[#EFEFEF] p-[20px] rounded-lg'>

                                <div className='lg:px-[40px] px-[10px] pt-[60px]'>
                                    <p className='text-[#1D2630] font-inter text-[20px] font-medium mt-1'>Ads.txt Entries</p>
                                    <p className='font-inter text-[14px] font-normal text-[#5B6B79] mt-1'>{"Ads.txt is mandatory. It needs to be updated incase you already have one. Else please follow the instructions provided here :https://support.google.com/admanager/answer/7441288?hl=en . Yield Monk’s ads.txt should be appended alongside your existing partners."}</p>

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
                                                onChange={(e) => setScriptValueVerify(e.target.value)}
                                                rowsMin={3}
                                                value={scriptValueVerify}

                                            />
                                        </FormControl>
                                    </div>

                                    <Button variant='outlined' className='w-[107px] h-[40px] px-[16px] py-[9x] rounded-full capitalize mt-5' onClick={handleCopyCodeVerify1}>Copy Code</Button>
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
                                                onChange={(e) => setScriptValueVerify1(e.target.value)}
                                                rowsMin={3}
                                                value={scriptValueVerify1}

                                            />
                                        </FormControl>
                                    </div>

                                    <Button variant='outlined' className='w-[107px] h-[40px] px-[16px] py-[9x] rounded-full capitalize mt-5' onClick={handleCopyCodeVerify2}>Copy Code</Button>
                                    <p className='text-[#1D2630] mt-8 font-inter text-[20px] font-medium'>Missing Entries</p>
                                    <p className='font-inter text-[14px] font-normal text-[#5B6B79] mt-1'>{"The following entries are missing. To avoid loss in revenue, please append the following entries in your ads.txt file."}</p>

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
                                                onChange={(e) => setScriptValueVerify2(e.target.value)}
                                                rowsMin={3}
                                                value={scriptValueVerify2}

                                            />
                                        </FormControl>
                                    </div>

                                    <Button variant='outlined' className='w-[107px] h-[40px] px-[16px] py-[9x] rounded-full capitalize mt-5' onClick={handleCopyCodeVerify3}>Copy Code</Button>
                                    <div className='flex flex-col md:flex-row justify-end gap-3 mt-6'>
                                        <FormControl variant="outlined">
                                            <Button variant="outlined" className='text-[#1D2630] font-inter font-medium rounded-lg py-2 text-[14px] border-[#D9D9D9] capitalize' startIcon={<WestIcon />} onClick={() => {
                                                setEntriesFlag(false)
                                            }} >Back</Button>

                                        </FormControl>
                                        <FormControl>
                                            <Button variant="contained" size='medium' className='bg-[#4680FF] rounded-lg py-2 px-6 capitalize' disableRipple={true} onClick={() => {
                                                setEntriesFlag(false)
                                            }}>Done</Button>
                                        </FormControl>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> :
                    <>
                        <div>
                            <div className='flex gap-2 mt-10'>
                                <p className='w-[40%] bg-[#F5F5F5] px-[20px] py-[10px] font-medium text-[16px] font-inter text-[#5B6B79]'>Domain</p>
                                <p className='w-[20%] bg-[#F5F5F5] px-[20px] py-[10px] font-medium text-[16px] font-inter text-[#5B6B79]'>Status</p>
                                <p className='w-[40%] bg-[#F5F5F5] px-[20px] py-[10px] font-medium text-[16px] font-inter text-[#5B6B79] flex justify-end items-end'>Action</p>
                            </div>
                            {
                                tableData.map((item, index) => {
                                    return (
                                        <div key={index} className='flex gap-2'>
                                            <p className='w-[40%] px-[20px] font-inter font-normal text-[14px] py-[10px] text-[#5B6B79] flex-wrap sm:flex-nowrap'>{item.website}</p>
                                            <p className='w-[20%] px-[20px] font-inter font-normal text-[14px] py-[10px] text-[#5B6B79]'>{item.status}</p>
                                            <p className='w-[40%] px-[20px] font-inter font-normal text-[14px] py-[10px] text-[#5B6B79] flex justify-end items-end'>
                                                <Button variant='contained' className='bg-[#4680FF] px-[5px]  sm:px-[16px] py-[3px] sm:py-[9px] rounded-lg' onClick={() => setEntriesFlag(true)}  >Get Entries</Button>

                                            </p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className='mt-5'>
                            <p className='w-[100%] bg-[#F5F5F5] px-[20px] py-[10px] font-medium text-[16px] font-inter text-[#5B6B79]'>Bonus</p>
                            <p className='font-inter font-normal text-[14px] text-[#5B6B79] p-5'>{"Bonus: Manage ads.txt for all your partners with AdPushup’s ads.txt management solution."}</p>
                        </div>
                        <div className='mt-5'>
                            <p className='w-[100%] bg-[#F5F5F5] px-[20px] py-[10px] font-medium text-[16px] font-inter text-[#5B6B79]'>Note</p>
                            <p className='font-inter font-normal text-[14px] text-[#5B6B79] p-5'>{"Note: Ads.txt is mandatory. It needs to be updated incase you already have one. Else please follow the intsructions provided here :https://support.google.com/admanager/answer/7441288?hl=en . AdPushup’s ads.txt should be appended alongside your existing partners."}</p>
                        </div></>
            }
        </div>
    )
}

export default AdsTxtManagement
