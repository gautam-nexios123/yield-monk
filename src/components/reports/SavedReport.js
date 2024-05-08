"use client"
import { Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, tableCellClasses } from '@mui/material';
import { styled } from '@mui/styles';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import EyeIcon from "../../assets/mysites/eye.svg";
import EditIcon from "../../assets/mysites/edit.svg";
import DeleteIcon from "../../assets/others/delete.svg";
import CustomSelect from '@/common/CustomSelect';
import { useTheme } from 'next-themes';


const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#FAFAFA",
        color: "black",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    border: "none",
}));

const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(even)': {
        backgroundColor: "#FAFAFA",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    border: "none"
}));


const SavedReport = ({ handleCloseReport, sitetableData, openReport }) => {
    const [searchValue, setSearchValue] = useState("");
    const [sortValue, setSortValue] = useState("Sort By");
    const [savedDialogFlag, setSavedDialogFlag] = useState(false);
    const { theme } = useTheme();

    const handleSortChange = (event) => {
        setSortValue(event.target.value);
    }
    useEffect(() => {
        setSavedDialogFlag(true);
    }, [])

    return (
        <Dialog
            onClose={handleCloseReport}
            aria-labelledby="customized-dialog-title"
            open={openReport}
            maxWidth={1500}
            sx={{
                '& .MuiDialogContent-root': {
                    padding: "16px",
                    backgroundColor: savedDialogFlag && theme === "light" ? "white" : "#1E1E1E"
                },
            }}

        >
            <DialogTitle className='font-inter font-semibold text-[16px] text-[#1E1E1E] dark:text-white' sx={{ m: 0, p: 2, backgroundColor: savedDialogFlag && theme === "light" ? "white" : "#1E1E1E" }} id="customized-dialog-title">
                Saved Reports
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleCloseReport}
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
                <div className='w-full'>
                    <div className='flex justify-between flex-col sm:flex-row'>
                        <FormControl>
                            <TextField
                                size="small"
                                variant="outlined"
                                placeholder='Search sites...'
                                className='font-inter font-normal text-[14px] rounded-lg'
                                sx={{ backgroundColor: "#F8F9FA" }}
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                    style: {
                                        backgroundColor: savedDialogFlag && theme === 'dark' ? '#1E1E1E' : '#F8F9FA',
                                        color: savedDialogFlag && theme === "dark" ? "white" : "black"
                                    }

                                }}
                            />
                        </FormControl>
                        <div className='flex gap-5'>
                            <div className='mt-1'>
                                <CustomSelect value={sortValue} handleChange={handleSortChange} menuList={["Sort By", "10", "15", "25"]} width={70} textColor={"black"} borderColor={"#D9D9D9"} />
                            </div>
                        </div>
                    </div>

                    <TableContainer component={Paper} className='mt-5'>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell className='cursor-pointer'
                                        //  onClick={() => handleSortData(column)} 
                                        align="start">
                                        Report Name
                                    </StyledTableCell>
                                    <StyledTableCell className='cursor-pointer'
                                        //  onClick={() => handleSortData(column)} 
                                        align="start">
                                        Frequency
                                    </StyledTableCell>
                                    <StyledTableCell className='cursor-pointer'
                                        //  onClick={() => handleSortData(column)} 
                                        align="start">
                                        Last Updated
                                    </StyledTableCell>
                                    <StyledTableCell className='cursor-pointer'
                                        //  onClick={() => handleSortData(column)} 
                                        align="start">
                                        Status
                                    </StyledTableCell>
                                    <StyledTableCell className='cursor-pointer'
                                        //  onClick={() => handleSortData(column)} 
                                        align="start">
                                        Actions
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sitetableData?.map((item, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell>
                                            <p className='font-inter text-[14px] font-normal'>{item.ReportName}</p>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <p className='font-inter text-[14px] font-normal'>{item.Frequency}</p>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <p className='font-inter text-[14px] font-normal'>{item.LastUpdated}</p>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <Chip label={`${item.Status}`} sx={{ backgroundColor: item.Status === "Pending" ? "#E14747" : "#4CB592" }} className='rounded-lg text-white' />

                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <div className='flex gap-2'>

                                                <Image className='cursor-pointer' src={EyeIcon} alt='EyeIcon' />
                                                <Image className='cursor-pointer' src={EditIcon} alt='EditIcon' />
                                                <Image className='cursor-pointer' src={DeleteIcon} alt='SettingIcon' onClick={() => setManageSiteFlag(true)} />

                                            </div>

                                        </StyledTableCell>
                                    </StyledTableRow>

                                ))
                                }

                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </DialogContent>
            <DialogActions className='border-t-[1px] border-[#F0F0F0] flex justify-between px-[16px] py-[10x]' sx={{ backgroundColor: savedDialogFlag && theme === "light" ? "white" : "#1E1E1E" }} >
                <Button variant="outlined" className='text-[#1D2630] dark:text-white font-inter font-medium rounded-full py-2 text-[14px] border-[#D9D9D9] capitalize' onClick={handleCloseReport} >Back</Button>
                <Button variant='contained' className=' w-[70px] h-[40px]  bg-[#4680FF] rounded-full capitalize' onClick={handleCloseReport}>Done</Button>

            </DialogActions>
        </Dialog>
    )
}

export default SavedReport
