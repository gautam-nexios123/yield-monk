import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({btnText , btnIcon }) => {
  return (
    <Button variant="outlined" className='bg-[#4680FF] hover:bg-[#4680FF] text-[#FFFFFF] font-inter font-normal text-[14px] rounded-full capitalize w-fit'>{btnIcon} {btnText}</Button>
  )
}

export default CustomButton
