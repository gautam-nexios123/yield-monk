"use client"
import CustomSelect from '@/common/CustomSelect'
import { Button, Chip, FormControl, InputAdornment, MenuItem, Pagination, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, createTheme, tableCellClasses } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import EyeIcon from "../../assets/mysites/eye.svg";
import EditIcon from "../../assets/mysites/edit.svg";
import SettingIcon from "../../assets/mysites/setting.svg";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from "../../assets/mysites/add.svg";
import { styled } from '@mui/styles'
import { useTheme } from 'next-themes'
import { darkThemePagination, lightThemePagination, muiSelectDarkTheme, muiSelectLightTheme } from '@/utils'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#FAFAFA",
        color: "black",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    border: "none",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: "#FAFAFA",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    border: "none"
}));


const SiteTable = ({ setAddFlag, currentPage, tableData, rowsPerPagedata, rowsPerPage, handlePrevPage, handleNextPage, handlePageChange, handleChangeRowsPerPage, totalPages, setManageSiteFlag }) => {

    const [sortValue, setSortValue] = useState("Sort By");
    const [searchValue, setSearchValue] = useState("");
    const [muiSelectFlag, setMuiSelectFlag] = useState(false);
    const { theme } = useTheme();
    const [showTablePagination, setShowTablePagination] = useState(false);

    const handleSortChange = (event) => {
        setSortValue(event.target.value);
    }

    useEffect(() => {
        setShowTablePagination(true)
        setMuiSelectFlag(true);
    }, [])

    return (
        <div className='p-10 w-full'>
            <div className='flex justify-between flex-col sm:flex-row'>
                <FormControl>
                    <TextField
                        size="small"
                        variant="outlined"
                        placeholder='Search sites...'
                        className='font-inter font-normal rounded-lg text-[14px]'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon style={{ color: theme === 'dark' ? '#fff' : '#333' }} />
                                </InputAdornment>
                            ),
                            style: {
                                backgroundColor: theme === 'dark' ? '#1E1E1E': '#F8F9FA' ,
                                color : theme === "dark" ? "white" : "black"
                            }

                        }}
                    />
                </FormControl>
                <div className='flex gap-5'>
                    <div className='mt-1'>
                        <CustomSelect value={sortValue} handleChange={handleSortChange} menuList={["Sort By", "10", "15", "25"]} width={70} textColor={"black"} borderColor={"#D9D9D9"} />
                    </div>
                    <FormControl >
                        <Button onClick={() => setAddFlag(true)} variant="contained" className='bg-[#4680FF] rounded-full py-[9px] px-[16px] capitalize' startIcon={<Image src={AddIcon} alt='setting' />} disableRipple={true}>Add New Site</Button>
                    </FormControl>
                </div>
            </div>

            <TableContainer component={Paper} className='mt-5'>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>

                            <StyledTableCell className='cursor-pointer'
                                //  onClick={() => handleSortData(column)} 
                                align="start">
                                Site Name
                            </StyledTableCell>
                            <StyledTableCell className='cursor-pointer'
                                //  onClick={() => handleSortData(column)} 
                                align="start">
                                Onboarding Status
                            </StyledTableCell>
                            <StyledTableCell className='cursor-pointer'
                                //  onClick={() => handleSortData(column)} 
                                align="start">
                                Site Status
                            </StyledTableCell>
                            <StyledTableCell className='cursor-pointer'
                                //  onClick={() => handleSortData(column)} 
                                align="start">
                                Actions
                            </StyledTableCell>



                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData?.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((item, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell>
                                    <div className='flex flex-col'>
                                        <p className='font-inter text-[14px] font-normal'>{item.FirstNestedObject.SiteName}</p>
                                        <p className='font-inter text-[12px] text-[#4680FF] font-normal'>{item.FirstNestedObject.SiteWebsite}</p>
                                    </div>

                                </StyledTableCell>
                                <StyledTableCell>
                                    <Chip label={`${item.Ostatus}`} sx={{ backgroundColor: item.Ostatus === "Incomplete" ? "#E14747" : "#4CB592" }} className='rounded-lg text-white' />

                                </StyledTableCell>
                                <StyledTableCell>
                                    <Chip label={`${item.Sstatus}`} sx={{ backgroundColor: item.Sstatus === "Incomplete" ? "#E14747" : "#4CB592" }} className='rounded-lg text-white' />

                                </StyledTableCell>
                                <StyledTableCell>
                                    <div className='flex gap-2'>

                                        <Image className='cursor-pointer' src={EyeIcon} alt='EyeIcon' />
                                        <Image className='cursor-pointer' src={EditIcon} alt='EditIcon' />
                                        <Image className='cursor-pointer' src={SettingIcon} alt='SettingIcon' onClick={() => setManageSiteFlag(true)} />

                                    </div>

                                </StyledTableCell>
                            </StyledTableRow>

                        ))
                        }

                    </TableBody>
                </Table>
            </TableContainer>
            <div className='flex justify-evenly flex-col sm:flex-row lg:px-[166px] md:px-[30px] sm:px-[80px] py-[16px]'>
                <div className='flex gap-2 mt-5 flex-col sm:flex-row'>
                    <p className='font-inter font-normal text-[14px] text-[#8C8C8C] mt-2'>Row per page</p>

                    {muiSelectFlag && <ThemeProvider theme={theme === "light" ? muiSelectLightTheme : muiSelectDarkTheme}>
                        <FormControl sx={{
                            maxWidth: 100,
                            height: '40px', // Customize height
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none', // Remove border
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                border: 'none', // Remove border on hover
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                border: 'none', // Remove border on focus
                            }
                        }}>
                            <Select
                                value={rowsPerPage}
                                onChange={(e) => handleChangeRowsPerPage(e)}
                                displayEmpty
                                className='lowercase text-[#1E1E1E] dark:text-white font-medium text-[14px]'
                                size='small'

                            >
                                {
                                    rowsPerPagedata?.map((item, index) => {
                                        return (
                                            <MenuItem key={index} value={item} className='lowercase text-[#1E1E1E] font-medium text-[14px]'>{item}/page</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </ThemeProvider>
                    }
                    <p className='font-inter font-normal text-[14px] text-[#1D2630] dark:text-white mt-2'>Go to</p>
                    {
                        showTablePagination && <ThemeProvider theme={theme === "light" ? lightThemePagination : darkThemePagination}>
                            <Pagination
                                variant="outlined"
                                shape="rounded"
                                className='text-[#1D2630] dark:text-white'
                                onChange={(e, currentPage) => handlePageChange(e, currentPage)}
                                page={currentPage}
                                siblingCount={0}
                                boundaryCount={1}
                                onNextClick={() => handleNextPage()}
                                onPrevClick={() => handlePrevPage()}
                                count={totalPages}
                            />
                        </ThemeProvider>
                    }


                </div>
            </div>
        </div>
    )
}

export default SiteTable
