import { Button, FormControl, OutlinedInput } from '@mui/material'
import React from 'react'

const Createorganization = () => {
  return (
    <div className='flex justify-center h-[90vh] items-center'>
      <div className='container justify-center xl:w-[40%] lg:w-[60%] md:w-[70%] w-[100%] px-3'>
        <p className='font-roboto text-lg font-medium text-black mb-4'>New Organisation</p>
        <div className="flex flex-col gap-4">
          <FormControl sx={{ width: '100%', }} variant="outlined">
            <label className='font-inter font-normal text-sm mb-2 text-[#5B6B79]'><span className='text-[#DC2626]'>*</span> Organisation Name</label>
            <OutlinedInput
              id="org-name"
              aria-describedby="org-name-helper"
              inputProps={{
                'aria-label': 'organisation name',
              }}
              sx={{ borderRadius: "8px !important" }}
            />
          </FormControl>
          <FormControl sx={{ width: '100%' }} variant="outlined">
            <label className='font-inter font-normal text-sm mb-2 text-[#5B6B79]'>Organisation’s Website</label>
            <OutlinedInput
              id="org-website"
              aria-describedby="org-website-helper"
              inputProps={{
                'aria-label': 'organisation website',
              }}
              sx={{ borderRadius: "8px !important" }}
            />
          </FormControl>
        </div>
        <FormControl sx={{ mt: 3 }}>
          <Button variant="contained" className='bg-[#4680FF] rounded-full py-2 px-6 capitalize' disableRipple={true}>Create Organisation</Button>
        </FormControl>
      </div>
    </div>

  )
}

export default Createorganization
