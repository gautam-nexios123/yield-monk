"use client"
import { Button, FormControl, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import SignUpImg from "../../assets/signup.png"
import Image from 'next/image'


const Login = () => {

    const [checkedMark, setCheckedMark] = useState();

    // checkbox event
    const handleCheckboxChange = event => {
        setCheckedMark(event.target.checked)
    }
    return (
        <div className="xl:pl-24 pl-3 pr-3 align-middle flex">
            <div className='w-[100%] lg:w-[40%] formContent mt-[15%]'>

                <p className='font-inter font-normal text-[20px] text-[#1D2630] leading-6 text-center'>Login with your email</p>

                <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        placeholder='Email'
                    />

                </FormControl>
                <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        placeholder='Password   '
                    />

                </FormControl>
                <div className='flex justify-between mt-5'>
                    <label className=" login_checkbox flex">
                        <input type="checkbox" className="login_checkbox__input" checked={checkedMark}
                            onChange={handleCheckboxChange} />
                        <span className="login_checkbox__inner"></span>
                        <span className='font-inter text-[#1D2630] text-[14px] font-normal' style={{ marginLeft: 5, }}>Remember me?</span>
                    </label>

                    <p className=' font-inter font-medium text-[14px] text-[#547AFE]'>Forgot Password?</p>
                </div>

                <FormControl sx={{ mt: 4, width: '100%' }}>

                    <Button variant="contained" className='bg-[#4680FF] h-[47px] capitalize' disableRipple={true}>Login</Button>
                </FormControl>
                <div className='flex justify-between mt-3'>
                    <p className='mt-2 font-inter font-medium text-[14px] text-[#5B6B79]'>Don't have an account? </p>
                    <p className='mt-2 font-inter font-medium text-[14px] text-[#4680FF]'>Create Account</p>

                </div>
            </div>
            <div className='w-[60%]  h-full hidden lg:block text-end'>
                <Image src={SignUpImg} className='w-[100%] lg:w-[90%] h-[92vh]' alt='signupImg' ></Image>

            </div>
        </div>
    )
}

export default Login
