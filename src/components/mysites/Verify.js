import { Button, FormControl, TextareaAutosize } from '@mui/material'
import React from 'react'
import WestIcon from '@mui/icons-material/West';


const Verify = ({ scriptValueVerify, setScriptValueVerify, handleCopyCodeVerify1, scriptValueVerify1, setScriptValueVerify1, handleCopyCodeVerify2, setNump2Comp, setNump3Comp, }) => {
    return (
        <div className='px-[20px] py-[40px] w-[100%]'>
            <p className='font-inter font-medium text-[20px] text-[#1D2630]'>Verify Ads.txt</p>
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

            <div className='flex flex-col'>
                <Button variant='outlined' className='w-[107px] h-[40px] px-[16px] py-[9x] rounded-full capitalize mt-5' onClick={handleCopyCodeVerify2}>Copy Code</Button>
                <Button variant='contained' className=' w-[70px] h-[40px] px-[16px] py-[9x] rounded-full capitalize mt-5'>Verify</Button>
            </div>

            <div className='flex flex-col md:flex-row justify-end gap-3 mt-6'>
                <FormControl variant="outlined">
                    <Button variant="outlined" className='text-[#1D2630] font-inter font-medium rounded-lg py-2 text-[14px] border-[#D9D9D9] capitalize' startIcon={<WestIcon />} onClick={() => {
                        setNump2Comp(false)
                        setNump3Comp(false)
                    }} >Back</Button>

                </FormControl>
                <FormControl>
                    <Button variant="contained" size='medium' className='bg-[#4680FF] rounded-lg py-2 px-6 capitalize' disableRipple={true} onClick={() => setNump3Comp(true)}>Done</Button>
                </FormControl>
            </div>
        </div>
    )
}

export default Verify
