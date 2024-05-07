"use client"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, OutlinedInput } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import CustomSelect from '@/common/CustomSelect';
import { styled } from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from 'next-themes';

const ScheduleDialog = ({ handleCloseSchedule, openSchedule }) => {

    const [frequencyValue, setFrequencyValue] = useState("Once");
    const [emailValue, setEmailValue] = useState("");
    const [weekValue, setWeekValue] = useState("Monday");
    const [monthValueDate, setMonthValueDate] = useState("1");
    const [scheduleFlag, setScheduleFlag] = useState(false)
    const {theme} = useTheme();

    const handleFrequencyChange = (event) => {
        setFrequencyValue(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    }


    const handleWeekChange = (event) => {
        setWeekValue(event.target.value);
    }

    const handleMonthDateChange = (event) => {
        setMonthValueDate(event.target.value);
    }

    useEffect(() => {
      setScheduleFlag(true);
    }, [])
    

    return (
        <Dialog
            onClose={handleCloseSchedule}
            aria-labelledby="customized-dialog-title"
            open={openSchedule}
            fullWidth
            sx={{
                '& .MuiDialogContent-root': {
                    padding: "16px",
                    backgroundColor: scheduleFlag && theme === "light" ? "white" : "#1E1E1E"
                }, 
            }}
          
        >
            <DialogTitle className='font-inter font-semibold text-[16px] text-[#1E1E1E] dark:text-white' sx={{ m: 0, p: 2,backgroundColor: scheduleFlag && theme === "light" ? "white" : "#1E1E1E" }} id="customized-dialog-title">
                Schedule Report
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleCloseSchedule}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: "gray",
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <div>
                    <p className='font-inter font-normal text-[14px] text-[#1E1E1E] dark:text-white'>This is Card</p>
                    <FormControl sx={{ width: '100%', }} className='mt-2' variant="outlined">
                        <label className='font-inter font-normal text-[14px] mb-2 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Report Name</label>
                        <OutlinedInput
                            id="org-name"
                            aria-describedby="org-name-helper"
                            inputProps={{
                                'aria-label': 'organisation name',
                            }}
                            className='text-black dark:text-white'
                            sx={{ borderRadius: "8px !important", height: "40px" }}
                            placeholder='Name'
                        />
                    </FormControl>
                    <div className='mt-3'>
                        <label className='font-inter font-normal text-[14px] mb-3 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Frequency</label>

                    </div>
                    <div className='mt-2'>

                        <CustomSelect IconComponent={KeyboardArrowDownIcon} textColor={"#353535"} borderColor={"#CFD1D4"} menuList={["Once", "Daily", "Monthly", "Weekly"]} value={frequencyValue} width={"100%"} handleChange={handleFrequencyChange} />

                    </div>
                    {frequencyValue === "Weekly" &&
                        <>
                            <div className='mt-3'>
                                <label className='font-inter font-normal text-[14px] mb-3 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Select a Day</label>

                            </div>
                            <div className='mt-2'>

                                <CustomSelect IconComponent={KeyboardArrowDownIcon} textColor={"#353535"} borderColor={"#CFD1D4"} menuList={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]} value={weekValue} width={"100%"} handleChange={handleWeekChange} />

                            </div>
                        </>
                    }
                    {frequencyValue === "Monthly" &&
                        <>
                            <div className='mt-3'>
                                <label className='font-inter font-normal text-[14px] mb-3 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Select Date</label>

                            </div>
                            <div className='mt-2'>

                                <CustomSelect IconComponent={KeyboardArrowDownIcon} textColor={"#353535"} borderColor={"#CFD1D4"} menuList={["1", "2", "3", "4", "5"]} value={monthValueDate} width={"100%"} handleChange={handleMonthDateChange} />

                            </div>
                        </>
                    }
                    <div className='mt-3'>
                        <label className='font-inter font-normal text-[14px] mb-3 text-[#6F747F]'><span className='text-[#DC2626]'>*</span> Email</label>

                    </div>
                    <div className='mt-2'>
                        <CustomSelect IconComponent={KeyboardArrowDownIcon} textColor={"#353535"} borderColor={"#CFD1D4"} menuList={["Once", "Twice"]} value={emailValue} width={"100%"} handleChange={handleEmailChange} />

                    </div>
                </div>
            </DialogContent>
            <DialogActions className='border-t-[1px] border-[#F0F0F0] flex justify-between px-[16px] py-[10x]'   sx={{  backgroundColor: scheduleFlag && theme === "light" ? "white" : "#1E1E1E" }} >
                <Button variant="outlined" className='text-[#1D2630] dark:text-white font-inter font-medium rounded-full py-2 text-[14px] border-[#D9D9D9] capitalize' onClick={handleCloseSchedule} >Back</Button>
                <Button variant='contained' className=' w-[70px] h-[40px]  bg-[#4680FF] rounded-full capitalize' onClick={handleCloseSchedule}>Save</Button>

            </DialogActions>
        </Dialog>
    )
}

export default ScheduleDialog
