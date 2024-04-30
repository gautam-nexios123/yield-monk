import { Button, FormControl, OutlinedInput } from '@mui/material'
import WestIcon from '@mui/icons-material/West';
import React from 'react'

const PersonalDetails = ({handleNextPaymentMethod,handlePrevPersonalDetails}) => {
    return (
        <div className='p-5 w-full'>
            <p className='font-inter font-medium text-[20px] text-[#1D2630]'>Personal Detail</p>
            <p className='text-[#5B6B79] text-[12px] font-normal font-inter mt-3' >To ensure that you receive your payments on time, please enter your details as you shared them with your bank. P.O. Box not allowed.</p>
            <div className='flex flex-col w-full justify-start gap-3 mt-6'>
                <label className='font-inter font-normal text-[14px] mb-1 text-[#6F747F]'>Type</label>

                <FormControl variant="outlined">
                    <OutlinedInput
                        id="org-name"
                        aria-describedby="org-name-helper"
                        inputProps={{
                            'aria-label': 'organisation name',
                        }}
                        className='w-[100%] lg:w-[60%]'
                        sx={{ borderRadius: "8px !important" }}
                        placeholder='Please enter the type'
                    />
                </FormControl>

            </div>
            <div className='flex flex-col w-full justify-start gap-3 mt-6'>
                <label className='font-inter font-normal text-[14px] mb-1 text-[#6F747F]'>Name</label>

                <FormControl variant="outlined">
                    <OutlinedInput
                        id="org-name"
                        aria-describedby="org-name-helper"
                        inputProps={{
                            'aria-label': 'organisation name',
                        }}
                        sx={{ borderRadius: "8px !important" }}
                        placeholder='Please enter your full name'
                        className='w-[100%] lg:w-[60%]'
                    />
                </FormControl>

            </div>
            <div className='flex flex-col w-full justify-start gap-3 mt-6'>
                <label className='font-inter font-normal text-[14px] mb-1 text-[#6F747F]'>Contact</label>

                <FormControl variant="outlined">
                    <OutlinedInput
                        id="org-name"
                        aria-describedby="org-name-helper"
                        inputProps={{
                            'aria-label': 'organisation name',
                        }}
                        sx={{ borderRadius: "8px !important"}}
                        placeholder='Please enter your contact'
                        className='w-[100%] lg:w-[60%]'
                    />
                </FormControl>

            </div>
            <div className='flex flex-col w-full justify-start gap-3 mt-6'>
                <label className='font-inter font-normal text-[14px] mb-1 text-[#6F747F]'>Email</label>

                <FormControl variant="outlined">
                    <OutlinedInput
                        id="org-name"
                        aria-describedby="org-name-helper"
                        inputProps={{
                            'aria-label': 'organisation name',
                        }}
                        sx={{ borderRadius: "8px !important"}}
                        placeholder='Please enter your email'
                        className='w-[100%] lg:w-[60%]'
                    />
                </FormControl>

            </div>
            <div className='flex flex-col w-full justify-start gap-3 mt-6'>
                <label className='font-inter font-normal text-[14px] mb-1 text-[#6F747F]'>Address</label>

                <FormControl variant="outlined">
                    <OutlinedInput
                        id="org-name"
                        aria-describedby="org-name-helper"
                        inputProps={{
                            'aria-label': 'organisation name',
                        }}
                        className='w-[100%] lg:w-[60%]'
                        sx={{ borderRadius: "8px !important" }}
                        placeholder='Please enter your address'
                    />
                </FormControl>

            </div>
            <div className='flex flex-col w-full justify-start gap-3 mt-6'>
                <label className='font-inter font-normal text-[14px] mb-1 text-[#6F747F]'>Pin code</label>

                <FormControl variant="outlined">
                    <OutlinedInput
                        id="org-name"
                        aria-describedby="org-name-helper"
                        inputProps={{
                            'aria-label': 'organisation name',
                        }}
                        className='w-[100%] lg:w-[60%]'
                        sx={{ borderRadius: "8px !important"}}
                        placeholder='Please enter your postcode'
                    />
                </FormControl>

            </div>
            <div className='flex flex-col md:flex-row justify-end gap-3 mt-6'>

                <FormControl>
                    <Button variant="contained" size='medium' className='bg-[#4680FF] rounded-lg py-2 px-6 capitalize' disableRipple={true} onClick={handleNextPaymentMethod}>Continue</Button>

                </FormControl>
            </div>
        </div>
    )
}

export default PersonalDetails
