import { Button, FormControl } from '@mui/material'
import React from 'react'
import WestIcon from '@mui/icons-material/West';


const TaxForm = ({handlePrev,handleNextDonepage}) => {
    return (
        <div className='p-10 w-full'>
            <p className='font-inter font-medium text-[20px] text-[#1D2630]'>Tax Forms</p>
            <p className='text-[12px] font-normal font-inter text-[#5B6B79] py-4'>To view the information you submitted, click here.</p>

            <p className='text-[12px] font-normal font-inter text-[#5B6B79] pb-4'>To submit a new tax form, click here.</p>

            <p className='text-[12px] font-normal font-inter text-[#5B6B79]'>To submit a new Certificate of No U.S. Activities, click here.</p>
            <div className='flex flex-col md:flex-row justify-end gap-3 mt-6'>
                <FormControl variant="outlined">
                    <Button variant="outlined" className='text-[#1D2630] font-inter font-medium rounded-lg py-2 text-[14px] border-[#D9D9D9] capitalize' startIcon={<WestIcon />} onClick={handlePrev} >Back</Button>

                </FormControl>
                <FormControl>
                    <Button variant="contained" size='medium' className='bg-[#4680FF] rounded-lg py-2 px-6 capitalize' disableRipple={true} onClick={handleNextDonepage}>Continue</Button>

                </FormControl>
            </div>
        </div>
    )
}

export default TaxForm
