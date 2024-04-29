"use client"
import { Button, FormControl, LinearProgress, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import SignUpImg from "../../assets/signup.png"
import Image from 'next/image'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    progressBar: {
      width: '50%',
      display: 'block', // Set width to 50%
    },
    text: {
      color: (passwordStrength) => {
        if (passwordStrength <= 25) {
          return '#ff6666';
        } else if (passwordStrength <= 50) {
          return 'orange';
        } else if (passwordStrength <= 75) {
          return 'orange'; // Changed from yellow to orange for better visibility
        } else {
          return '#2CA87F';
        }
      },
    },
  });

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [passwordFlag,setPasswordFlag] = useState(false);
    const classes = useStyles(passwordStrength);
    const [checkedMark, setCheckedMark] = useState(true);
    const [checkMarkShow,setCheckMarkShow] = useState(false)
console.log("passwordStrength",typeof(passwordStrength))
    // checkbox event
    const handleCheckboxChange = event => {
        setCheckedMark(event.target.checked)
    }
    const calculatePasswordStrength = (password) => {
        // Calculate password strength based on your criteria
        // For simplicity, let's consider length as the criteria
        if (password.length <= 6) {
            return 25;
        } else if (password.length <= 10) {
            return 50;
        } else if (password.length <= 14) {
            return 75;
        } else {
            return 100;
        }
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        if (event.target.value) {
            
            setPasswordFlag(true)
        } else {
            setPasswordFlag(false)
        }
        setPassword(newPassword);
        const strength = calculatePasswordStrength(newPassword);
        setPasswordStrength(strength);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const getProgressBarColor = () => {
        if (passwordStrength <= 25) {
          return '#ff6666';
        } else if (passwordStrength <= 50) {
          return 'orange';
        } else if (passwordStrength <= 75) {
          return 'orange'; // Changed from yellow to orange for better visibility
        } else {
          return '#2CA87F';
        }
      };
      const calculatePasswordStrengthText = (password) => {
        if (password.length <= 6) {
          return { strength: 25, label: 'Weak' };
        } else if (password.length <= 10) {
          return { strength: 50, label: 'Medium' };
        } else if (password.length <= 14) {
          return { strength: 75, label: 'Medium', };
        } else {
          return { strength: 100, label: 'Strong' };
        }
      };
    return (
        <div className="xl:pl-24 pl-3 pr-3 align-middle flex">
            <div className='w-[100%] lg:w-[40%] formContent mt-[15%]'>

                <p className='font-inter font-normal text-[20px] text-[#1D2630] leading-6 text-center'>Reset Password</p>


                <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        placeholder='Password'
                        sx={{ borderRadius: "8px", border: "1px solid #EFEFEF" }}
                        value={password}
                        onChange={handlePasswordChange}
                    />

                </FormControl>
                

               
                <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        placeholder='Confirm Password'
                        sx={{ borderRadius: "8px", border: "1px solid #EFEFEF" }}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}

                    />

                </FormControl>
                {passwordFlag && <div className='flex w-[100%] gap-2 mt-1'>
          <p className={`${classes.text} font-inter font-medium text-[14px] mt-2`}> {calculatePasswordStrengthText(password).label}</p>

                <LinearProgress className='mt-4' variant="determinate" value={passwordStrength}  sx={{
            '& .MuiLinearProgress-bar': {
              backgroundColor: getProgressBarColor(),
            },
          }} />
         {passwordStrength === 100 &&  <label className=" reset_checkbox flex mt-3">
                        <input type="checkbox" className="reset_checkbox__input" checked={checkedMark}
                            onChange={handleCheckboxChange} />
                        <span className="reset_checkbox__inner"></span>
                    </label>}

                </div>}
                <FormControl sx={{ mt: 4, width: '100%' }}>

                    <Button variant="contained" className='bg-[#4680FF] h-[47px] capitalize rounded-lg' disableRipple={true}>Reset Password</Button>
                </FormControl>
            </div>
            <div className='w-[60%]  h-full hidden lg:block text-end'>
                <Image src={SignUpImg} className='w-[100%] lg:w-[90%] h-[92vh]' alt='signupImg' ></Image>

            </div>
        </div>
    )
}

export default ResetPassword
