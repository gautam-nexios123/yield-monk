import { Button, FormControl, OutlinedInput } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import SignUpImg from "../../assets/signup.png"


const ForgotPassword = () => {
  return (
    <div className="xl:pl-24 pl-3 pr-3 align-middle flex">
            <div className='w-[100%] lg:w-[40%] formContent mt-[16%]'>

                <p className='font-inter font-normal text-[20px] text-[#1D2630] leading-6 text-center'>Forgot Password</p>

                <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        placeholder='Email'
                        sx={{borderRadius:"8px" , border:"1px solid #EFEFEF"}}
                    />

                </FormControl>
                <p className='font-inter font-normal text-[14px] text-[#5B6B79] text-start mt-3'>Do not forgot to check SPAM box.</p>

                <FormControl sx={{ mt: 4, width: '100%' }}>

                    <Button variant="contained" className='bg-[#4680FF] rounded-lg h-[47px] capitalize' disableRipple sx={{
                          '&:hover': {
                            backgroundColor: '#4680FF', // Set hover background color to transparent
                          },
                    }}>Send Password on Reset Email</Button>
                </FormControl>
                <FormControl sx={{ mt: 1, width: '100%' }}>

                    <Button variant="text" className='text-[#4680FF] bg-transparent h-[47px] capitalize' disableRipple sx={{

                          '&:hover': {
                            backgroundColor: 'transparent', // Set hover background color to transparent
                          },
                    }}>Login</Button>
                </FormControl>
               
            </div>
            <div className='w-[60%]  h-full hidden lg:block text-end'>
                <Image src={SignUpImg} className='w-[100%] lg:w-[90%] h-[92vh]' alt='signupImg' ></Image>

            </div>
        </div>
  )
}

export default ForgotPassword
