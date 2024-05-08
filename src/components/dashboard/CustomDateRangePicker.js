"use client"
import { Box, Button, Fade, Modal } from '@mui/material';
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Image from 'next/image';
import { DateRangePicker } from 'react-date-range';
import arrowLeft from "../../assets/dashboard/arrow-left.svg";
import DarkArrowLeft from "../../assets/dashboard/arrow-left-dark.svg";
import { useTheme } from 'next-themes';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    padding: "10px",
    borderRadius: "8px"
};

const CustomDateRangePicker = ({ dateRange, setDateRange }) => {
    const [datePickerModel, setDatePickerModel] = useState(false);
    const [dateFlag, setDateFlag] = useState(false)
    const { theme } = useTheme();
    const handleOpen = () => setDatePickerModel(true);
    const handleClose = () => setDatePickerModel(false);

    useEffect(() => {
        setDateFlag(true);
    }, [])


    return (
        <div>
            <div onClick={() => handleOpen()} className='flex items-center justify-between gap-[20px] border border-[#CFD1D4] rounded px-[12px] py-[5px] cursor-pointer'>
                <div className='text-[14px] font-inter font-medium text-[#1E1E1E] dark:text-white'>{moment(dateRange[0]?.startDate).format('DD/MM/YYYY')}</div>
                <div><Image src={dateFlag && theme === "light" ? arrowLeft : DarkArrowLeft} alt='arrowLeft' /></div>
                <div className='text-[14px] font-inter font-medium text-[#1E1E1E] dark:text-white'>{moment(dateRange[0]?.endDate).format('DD/MM/YYYY')}</div>
                <div><CalendarMonthIcon /></div>
            </div>
            <Modal
                open={datePickerModel}
                // onClose={handleClose}
                closeAfterTransition
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={datePickerModel}>
                    <Box sx={style}>
                        <DateRangePicker
                            onChange={item => setDateRange([item.selection])}
                            showSelectionPreview={true}
                            months={2}
                            ranges={dateRange}
                            staticRanges={[]}
                            direction="horizontal"
                            inputRanges={[]}
                            showDateDisplay={true}
                            showMonthAndYearPickers={true}
                        />
                        <div className='flex items-center gap-5 justify-end mr-3 my-6'>
                            <Button variant="outlined" className='capitalize' onClick={() => {
                                handleClose(), setDateRange([
                                    {
                                        startDate: new Date(),
                                        endDate: new Date(),
                                        key: 'selection'
                                    }
                                ])
                            }}>Cancel</Button>
                            <Button variant="contained" className='capitalize' onClick={() => handleClose()}>Apply</Button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default CustomDateRangePicker
