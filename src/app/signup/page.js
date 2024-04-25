"use client"
import React, { useState } from 'react'
import SignUpImg from "../../assets/signup.png"
import Image from 'next/image'
// import {FormControl} from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { Button, FormControl } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import 'react-phone-input-2/lib/material.css'; 

const SignUp = () => {

    const [countryCode,setCountryCode] = useState("")
    const [phoneInput,setPhoneInput] = useState("");

    return (

       
            
      <div className="xl:pl-24 pl-0 pr-0 align-middle flex">
            <div className='w-[100%] lg:w-[50%] formContent mt-[12%]'>

            <p className='font-roboto font-bold text-[21px] text-black leading-6'>Sign Up</p>
            <p className='font-roboto mt-1 text-[12px] font-normal text-black'>Already have an account? <span className='font-roboto text-[12px] font-normal text-[#0667D6]'>Log In</span> </p>
            <FormControl sx={{ mt: 3, width: '80%' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"><AccountCircleIcon/></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            placeholder='Name'
          />
          
        </FormControl>
        <FormControl sx={{ mt: 2, width: '80%' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"><EmailIcon/></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            placeholder='Email'
          />
          
        </FormControl>
        <FormControl sx={{ mt: 2, width: '80%' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"><VpnKeyIcon/></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            placeholder='Password   '
          />
          
        </FormControl>
         <div phone-input-container style={{ display: 'flex', alignItems: 'center' , marginTop:"15px" }}>
          {/* Country code and flag list */}
          <div style={{ width: '22%',marginRight: '10px' }}>
            <PhoneInput
              country={'us'}
              value={countryCode}
              onChange={(phoneNumber) => setCountryCode(phoneNumber)}
              enableSearch
              disableSearchIcon
              inputProps={{
                placeholder: 'Phone Number',
                id: 'phoneInput', // Add an id to the input field
                style: { textIndent: '0', lineHeight: 'normal' } // Remove label and adjust text indentation
              }}
              inputStyle={{ lineHeight: 'normal' }} // Remove hover background color effect
              buttonStyle={{ lineHeight: 'normal' }} // Remove hover background color effect for the flag button
  
            />
          </div>
          {/* Separate input field */}
          <FormControl  sx={{ width: '57%' }}  variant="outlined">
            <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end"><LocalPhoneIcon/></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            placeholder='Phone Number'
            value={phoneInput}
            onChange={(e) => setPhoneInput(e.target.value)}
            type="text"
          />
        </FormControl>
          {/* <input
            type="text"
           
            placeholder="Enter phone number"
          /> */}
        </div>
      
        <FormControl sx={{ mt: 2, width: '80%' }}>

        <Button variant="contained" className='bg-[#2EA1FF] h-[47px] capitalize' disableRipple={true}>Sign up</Button>
        </FormControl>
        <p className=' mt-2 font-roboto font-normal text-[12px] text-black opacity-75'>By signing up, you agree to our <span  className='font-roboto font-normal text-[12px] text-[#0667D6]'>‘Privacy Policy’</span>  & <span  className='font-roboto font-normal text-[12px] text-[#0667D6]'>‘Terms of service’</span> </p>
            </div>
            <div  className='w-[50%]  h-full hidden lg:block'>
                    <Image src={SignUpImg} className='w-[100%] lg:w-[90%] h-[92vh]' alt='signupImg' ></Image>

            </div>
      </div>
   

    )
}

export default SignUp
