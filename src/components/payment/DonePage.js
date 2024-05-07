import { Button, FormControl } from '@mui/material';
import React from 'react'
import WestIcon from '@mui/icons-material/West';


const DonePage = ({handlePrev}) => {
  return (
    <div className='p-10 w-full'>
      <p className='font-inter font-medium text-[20px] text-[#1D2630] dark:text-white'>Done</p>
      <p className='text-[12px] font-extrabold font-inter text-[#5B6B79] py-4'>You are all set. Payments will be made per your selections.</p>

      <p className='text-[12px] font-normal font-inter text-[#5B6B79]'>If you want to review your information, press the back button to review previous steps.</p>

      <p className='text-[12px] font-normal font-inter text-[#5B6B79]'>If you wish to edit any details, click the edit button on the appropriate form. After editing please proceed through all the steps again until this final confirmation.</p>
      <div className='flex flex-col md:flex-row justify-end gap-3 mt-6'>
        <FormControl variant="outlined">
          <Button variant="outlined" className='text-[#1D2630] dark:text-white font-inter font-medium rounded-lg py-2 text-[14px] border-[#D9D9D9] capitalize' startIcon={<WestIcon />} onClick={handlePrev}>Back</Button>

        </FormControl>
        <FormControl>
          <Button variant="contained" size='medium' className='bg-[#4680FF] rounded-lg py-2 px-6 capitalize' disableRipple={true}>Done</Button>

        </FormControl>
      </div>
    </div>
  )
}

export default DonePage;
