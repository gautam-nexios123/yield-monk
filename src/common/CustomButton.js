import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({btnText , btnIcon,btnHeight ,handleClick}) => {
  return (
    <Button variant="outlined" sx={{height:btnHeight}} onClick={handleClick} className='bg-[#4680FF] hover:bg-[#4680FF] text-[#FFFFFF] font-inter font-normal text-[14px] rounded-full sm:mb-0 capitalize w-fit whitespace-nowrap'>{btnIcon} {btnText}</Button>
  )
}

export default CustomButton
