"use client"
import { Button, FormControl, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import SignUpImg from "../../assets/signup.png"
import Image from 'next/image'
import OTPInput from 'react-otp-input'

const EmailVerification = () => {

    const [code, setCode] = useState("");

    const handleChange = (code) => {   // Check if the entered value is numeric
        if (!isNaN(code)) {
            setCode(code);
        }};

    return (
        <div className="xl:pl-24 pl-3 pr-3 flex justify-center">
            <div className='w-[100%] lg:w-[52%] formContent2 mt-[16%]'>

                <p className='font-inter font-normal text-[20px] text-[#1D2630] leading-6 text-center'>Verification Code</p>
                <FormControl sx={{ mt: 2, width: '100%' }} className='text-center xl:px-[25%] px-[2%] text-[#5B6B79] text-[14px] font-inter'>
                    <p>Please verify your email address by entering the 4-digit code
                        sent to your email.</p>
                </FormControl>

                {/* <FormControl className='ml-0 lg:ml-[10%] w-[100%] flex justify-center' sx={{ mt: 2 }} variant="outlined"> */}
                <div className='flex justify-center mt-8  w-[100%]' >
                    <OTPInput
                        value={code}
                        onChange={handleChange}                      
                        numInputs={4}
                        renderSeparator={<span style={{ width: "8px" }}></span>}
                        shouldAutoFocus={false}
                        isInputNum={true}
                        placeholder={"0"}
                        inputStyle={{
                            border: "1px solid #EFEFEF",
                            borderRadius: "8px",
                            width: "94px",
                            height: "42px",
                            padding: "10px 12px",
                            fontSize: "14px",
                            color: "#5B6B79",
                            fontWeight: "700",
                            caretColor: "black",
                            fontFamily: "Inter"
                        }}
                        focusStyle={{
                            border: "1px solid #CFD3DB",
                            outline: "none"
                        }}
                        renderInput={(props) => <input {...props} />}
                    />
                {/* </FormControl> */}
                </div>
                <div className='flex justify-center mt-8' >
                {/* <FormControl className='w-[100%] flex justify-center' sx={{ mt: 4 }}> */}

                    <Button variant="contained" className='bg-[#4680FF] w-[400px] h-[54px] capitalize rounded-lg font-inter text-[16px] font-normal' disableRipple={true}>Confirm</Button>
                {/* </FormControl> */}
                </div>
            </div>
            <div className='w-[60%]  h-full hidden lg:block text-end'>
                <Image src={SignUpImg} className='w-[100%] lg:w-[90%] h-[92vh]' alt='signupImg' ></Image>

            </div>
        </div>
    )
}

export default EmailVerification
