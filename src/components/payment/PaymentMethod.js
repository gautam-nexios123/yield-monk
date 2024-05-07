"use client"
import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const PaymentMethod = ({ handlePrev, handleNextTaxForm }) => {
  const [paymentMethod, setPaymentMethod] = useState('method1');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  return (
    <div className='p-5 w-full'>
      <p className='font-inter font-medium text-[20px] text-[#1D2630] dark:text-white'>Payment Methods</p>
      <div className='flex flex-col md:flex-row w-full justify-center gap-3 mt-6'>
        <FormControl sx={{ width: '100%', }} variant="outlined">
          <label className='font-inter font-normal text-[14px] mb-2 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Payment Method</label>
          <Select
            labelId="payment-method-label"
            id="payment-method"
            value={paymentMethod}
            defaultValue='method1'
            onChange={handlePaymentMethodChange}
            label="Payment Method"
            input={<OutlinedInput />}
            IconComponent={KeyboardArrowDownIcon} 
            className='text-[#1D2630] dark:text-white'
            sx={{ borderRadius: "8px !important" }}
          >
            <MenuItem value={'method1'} selected >Method 1</MenuItem>
            <MenuItem value={'method2'}>Method 2</MenuItem>
            <MenuItem value={'method3'}>Method 3</MenuItem>
            {/* Add more MenuItem components for each payment method */}
          </Select>
        </FormControl>
        <FormControl sx={{ width: '100%', }} variant="outlined">
          <label className='font-inter font-normal text-[14px] mb-2 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Payment Currency</label>
          <OutlinedInput
            id="org-name"
            aria-describedby="org-name-helper"
            inputProps={{
              'aria-label': 'organisation name',
            }}
            sx={{ borderRadius: "8px !important" }}
            placeholder='State'
            className='text-[#1D2630] dark:text-white'
          />
        </FormControl>
      </div>
      <div className='flex flex-col md:flex-row w-full justify-center gap-3 mt-6'>
        <FormControl sx={{ width: '100%', }} variant="outlined">
          <label className='font-inter font-normal text-[14px] mb-2 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Account Name</label>
          <OutlinedInput
            id="org-name"
            aria-describedby="org-name-helper"
            inputProps={{
              'aria-label': 'organisation name',
            }}
            sx={{ borderRadius: "8px !important" }}
            placeholder='Country'
            className='text-[#1D2630] dark:text-white'
          />
        </FormControl>
        <FormControl sx={{ width: '100%', }} variant="outlined">
          <label className='font-inter font-normal text-[14px] mb-2 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Account Number</label>
          <OutlinedInput
            id="org-name"
            aria-describedby="org-name-helper"
            inputProps={{
              'aria-label': 'organisation name',
            }}
            sx={{ borderRadius: "8px !important" }}
            placeholder='State'
            className='text-[#1D2630] dark:text-white'

          />
        </FormControl>
      </div>
      <div className='flex flex-col md:flex-row w-full justify-center gap-3 mt-6'>
        <FormControl sx={{ width: '100%', }} variant="outlined">
          <label className='font-inter font-normal text-[14px] mb-2 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> IFSC Code</label>
          <OutlinedInput
            id="org-name"
            aria-describedby="org-name-helper"
            inputProps={{
              'aria-label': 'organisation name',
            }}
            sx={{ borderRadius: "8px !important" }}
            placeholder='Country'
            className='text-[#1D2630] dark:text-white'

          />
        </FormControl>
        <FormControl sx={{ width: '100%', }} variant="outlined">
          <label className='font-inter font-normal text-[14px] mb-2 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Phone Number</label>
          <OutlinedInput
            id="org-name"
            aria-describedby="org-name-helper"
            inputProps={{
              'aria-label': 'organisation name',
            }}
            sx={{ borderRadius: "8px !important" }}
            placeholder='State'
            className='text-[#1D2630] dark:text-white'

          />
        </FormControl>
      </div>
      <div className='flex flex-col md:flex-row w-full justify-center gap-3 mt-6'>
        <FormControl sx={{ width: '100%', }} variant="outlined">
          <label className='font-inter font-normal text-[14px] mb-2 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Bank Name</label>
          <OutlinedInput
            id="org-name"
            aria-describedby="org-name-helper"
            inputProps={{
              'aria-label': 'organisation name',
            }}
            sx={{ borderRadius: "8px !important" }}
            placeholder='Country'
            className='text-[#1D2630] dark:text-white'

          />
        </FormControl>
        <FormControl sx={{ width: '100%', }} variant="outlined">
          <label className='font-inter font-normal text-[14px] mb-2 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Branch Name</label>
          <OutlinedInput
            id="org-name"
            aria-describedby="org-name-helper"
            inputProps={{
              'aria-label': 'organisation name',
            }}
            sx={{ borderRadius: "8px !important" }}
            placeholder='State'
            className='text-[#1D2630] dark:text-white'

          />
        </FormControl>
      </div>
      <div className='flex flex-col md:flex-row w-full justify-center gap-3 mt-6'>
        <FormControl sx={{ width: '100%', }} variant="outlined">
          <label className='font-inter font-normal text-[14px] mb-2 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Account Type</label>
          <OutlinedInput
            id="org-name"
            aria-describedby="org-name-helper"
            inputProps={{
              'aria-label': 'organisation name',
            }}
            sx={{ borderRadius: "8px !important" }}
            placeholder='Country'
            className='text-[#1D2630] dark:text-white'

          />
        </FormControl>
        <FormControl sx={{ width: '100%', }} variant="outlined">
          <label className='font-inter font-normal text-[14px] mb-2 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Swift Code</label>
          <OutlinedInput
            id="org-name"
            aria-describedby="org-name-helper"
            inputProps={{
              'aria-label': 'organisation name',
            }}
            sx={{ borderRadius: "8px !important" }}
            placeholder='State'
            className='text-[#1D2630] dark:text-white'

          />
        </FormControl>
      </div>
      <div className='flex flex-col md:flex-row w-full justify-center gap-3 mt-6'>
        <FormControl sx={{ width: '100%', }} variant="outlined">
          <label className='font-inter font-normal text-[14px] mb-2 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> State</label>
          <OutlinedInput
            id="org-name"
            aria-describedby="org-name-helper"
            inputProps={{
              'aria-label': 'organisation name',
            }}
            sx={{ borderRadius: "8px !important" }}
            placeholder='Country'
            className='text-[#1D2630] dark:text-white'

          />
        </FormControl>
        <FormControl sx={{ width: '100%', }} variant="outlined">
          <label className='font-inter font-normal text-[14px] mb-2 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Country</label>
          <OutlinedInput
            id="org-name"
            aria-describedby="org-name-helper"
            inputProps={{
              'aria-label': 'organisation name',
            }}
            sx={{ borderRadius: "8px !important" }}
            placeholder='State'
            className='text-[#1D2630] dark:text-white'

          />
        </FormControl>
      </div>
      <div className='flex flex-col md:flex-row justify-end gap-3 mt-6'>
        <FormControl variant="outlined">
          <Button variant="outlined" className='text-[#1D2630] dark:text-white font-inter font-medium rounded-lg py-2 text-[14px] border-[#D9D9D9] capitalize' startIcon={<WestIcon />} onClick={handlePrev}>Back</Button>

        </FormControl>
        <FormControl>
          <Button variant="contained" size='medium' className='bg-[#4680FF] rounded-lg py-2 px-6 capitalize' disableRipple={true} onClick={handleNextTaxForm} >Continue</Button>

        </FormControl>
      </div>
    </div>
  )
}

export default PaymentMethod
