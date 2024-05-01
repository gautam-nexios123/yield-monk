"use client"
import { Button, Chip, FormControl, IconButton, InputAdornment, MenuItem, OutlinedInput, Pagination, Paper, Select, Step, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, tableCellClasses } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CustomSelect from '@/common/CustomSelect';
import AddIcon from "../../../assets/mysites/add.svg";
import Image from 'next/image';
import { styled } from '@mui/styles';
import EyeIcon from "../../../assets/mysites/eye.svg";
import EditIcon from "../../../assets/mysites/edit.svg";
import SettingIcon from "../../../assets/mysites/setting.svg";
import WestIcon from '@mui/icons-material/West';
import { getWindowWidth } from '@/utils';
import Number1 from "../../../assets/mysites/number1.svg";
import Number2 from "../../../assets/mysites/number2.svg";
import Number3 from "../../../assets/mysites/number3.svg";
import SiteName from "../../../assets/mysites/sitename.svg";
import Home from "../../../assets/mysites/home.svg";
import Num1Com from "../../../assets/mysites/num1com.svg";
import Num2Sele from "../../../assets/mysites/num2sel.svg";

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

const tableData = [
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Complete",
    "Sstatus": "Complete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Complete",
    "Sstatus": "Complete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Incomplete",
    "Sstatus": "Incomplete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Complete",
    "Sstatus": "Complete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Complete",
    "Sstatus": "Complete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Incomplete",
    "Sstatus": "Incomplete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Complete",
    "Sstatus": "Complete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Complete",
    "Sstatus": "Complete"
  },
  {
    "FirstNestedObject": {
      "SiteName": "Site Name",
      "SiteWebsite": "https://www.sitename.com"
    },
    "Ostatus": "Incomplete",
    "Sstatus": "Incomplete"
  },
];

const rowsPerPagedata = [5, 10, 15, 25]

const steps = [{
  "label": "Step 1/3",
  "name": "Add Site Name"
}, {
  "label": "Step 2/3",
  "name": "Install Yield Monk Code"
}, {
  "label": "Step 3/3",
  "name": "Verify Ads.txt"
}];


const MySites = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("Sort By");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [addFlag, setAddFlag] = useState(false);
  const [num1Comp, setNump1Comp] = useState(false);
  const [num2Comp, setNump2Comp] = useState(false);

  const totalPages = Math.ceil(tableData?.length / rowsPerPage);

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  }

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(e.target.value)
  }

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };



  return (
    <div className='w-full'>
      {addFlag ? <div className='p-6 w-full'>
        <div className='card bg-[#FAFAFA] h-[750px] rounded-lg p-6'>
          <div className='flex'>
            <IconButton aria-label="back" onClick={() => setAddFlag(false)}>
              <WestIcon />
            </IconButton> <p className='text-[#1D2630] font-inter text-[20px] font-semibold mt-1'>Add New Site</p>
          </div>
          <div className='w-full  relative bg-white px-[0px] my-[31px]'>
            <div className='w-full border  border-[#EFEFEF] p-[16px] rounded-lg'>

              <div className='w-full flex-col bg-[#FAFAFA] md:flex-row flex gap-5 border border-[#EFEFEF] p-[16px] rounded-lg'>
                <div className={`border ${num1Comp ? "bg-white" : "bg-white"}  border-[#EFEFEF] gap-3 flex flex-col md:flex-row items-center p-[8px] md:p-[20px] rounded-lg  md:w-[35%] w-full `}>
                  <Image src={num1Comp ? Num1Com : Number1} alt='number1' />
                  <div>
                    <p className={`text-[12px] font-normal ${num1Comp ? "text-[#5B6B79]" : "text-[#4680FF]"} font-inter`}>Step 1/3</p>
                    <p className={`font-inter font-medium text-[14px]  ${num1Comp ? "text-[#2CA87F]" : "text-[#1D2630]"} `}>Add Site Name</p>
                  </div>
                </div>
                <div className={`border ${num1Comp ? "bg-white" : "bg-[#FAFAFA]"}  border-[#EFEFEF] gap-3 flex flex-col md:flex-row  items-center p-[8px] md:p-[20px] rounded-lg md:w-[35%] w-full `}>
                  <Image src={num1Comp ? Num2Sele : Number2} alt='number2' />
                  <div>
                    <p className={`text-[12px] font-normal ${num1Comp ?"text-[#4680FF]" : "text-[#5B6B79]"} font-inter`}>Step 2/3</p>
                    <p className='font-inter font-medium text-[14px] text-[#1D2630]'>Install Yield Monk Code</p>
                  </div>
                </div>
                <div className={`border ${num2Comp ? "bg-white" : "bg-[#FAFAFA]"}  border-[#EFEFEF] gap-3 flex flex-col md:flex-row  items-center p-[8px] md:p-[20px] rounded-lg md:w-[35%] w-full `}>
                  <Image src={Number3} alt='number3' />
                  <div>
                    <p className='text-[12px] font-normal text-[#5B6B79] font-inter'>Step 3/3</p>
                    <p className='font-inter font-medium text-[14px] text-[#1D2630]'>Verify Ads.txt</p>
                  </div>
                </div>
              </div>

              <div className='px-[20px] py-[40px]'>
                <p className='font-inter font-medium text-[20px] text-[#1D2630]'>Add Website</p>
                <p className='font-inter text-[14px] font-normal text-[#5B6B79] mt-1'>Let us know the website on which you want to use AdPushup. If you have more than one site then you can easily add them later through the dashboard.</p>

                <div className='flex gap-5 mt-8 flex-col md:flex-row'>
                  <FormControl sx={{ width: '100%', }} variant="outlined">
                    <OutlinedInput
                      id="org-name"
                      aria-describedby="org-name-helper"
                      inputProps={{
                        'aria-label': 'organisation name',
                      }}
                      sx={{ borderRadius: "8px !important", border: "2px solid #C0E5D9", padding: "22px 20px" }}
                      placeholder='Site Name'
                      startAdornment={ // You can also use endAdornment if you want the icon on the right
                        <InputAdornment position="start">
                          <Image src={SiteName} alt='sitename' />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl sx={{ width: '100%', }} variant="outlined">
                    <OutlinedInput
                      id="org-name"
                      aria-describedby="org-name-helper"
                      inputProps={{
                        'aria-label': 'organisation name',
                      }}
                      sx={{ borderRadius: "8px !important", padding: "22px 20px", backgroundColor: "#FAFAFA", color: "#5B6B79" }}
                      placeholder='State'
                      value={"https://www.sitename.com"}
                      startAdornment={ // You can also use endAdornment if you want the icon on the right
                        <InputAdornment position="start">
                          <Image src={Home} alt='sitename' />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <div className='flex flex-col md:flex-row justify-end gap-3 mt-6'>
                  <FormControl variant="outlined">
                    <Button variant="outlined" className='text-[#1D2630] font-inter font-medium rounded-lg py-2 text-[14px] border-[#D9D9D9] capitalize' startIcon={<WestIcon />} >Back</Button>

                  </FormControl>
                  <FormControl>
                    <Button variant="contained" size='medium' className='bg-[#4680FF] rounded-lg py-2 px-6 capitalize' disableRipple={true} onClick={() => setNump1Comp(true)}>Continue</Button>

                  </FormControl>
                </div>
              </div>


            </div>
          </div>
        </div>


      </div>
        : 
        <div className='p-10 w-full'>
          <div className='flex justify-between flex-col sm:flex-row'>
            <FormControl>
              <TextField
                size="small"
                variant="outlined"
                placeholder='Search sites...'
                className='font-inter font-normal text-[14px]'
                sx={{ backgroundColor: "#F8F9FA" }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),

                }}
              />
            </FormControl>
            <div className='flex gap-5'>
              <div className='mt-1'>
                <CustomSelect value={sortValue} handleChange={handleSortChange} menuList={["Sort By", "10", "15", "25"]} width={70} />
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
                        <Image className='cursor-pointer' src={SettingIcon} alt='SettingIcon' />

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
                  className='lowercase text-[#1E1E1E] font-medium text-[14px]'
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
              <p className='font-inter font-normal text-[14px] text-[#1D2630] mt-2'>Go to</p>
              <Pagination
                variant="outlined"
                shape="rounded"
                onChange={(e, currentPage) => handlePageChange(e, currentPage)}
                page={currentPage}
                siblingCount={0}
                boundaryCount={1}
                onNextClick={() => handleNextPage()}
                onPrevClick={() => handlePrevPage()}
                count={totalPages} />
            </div>
            {/* <div className='flex gap-8 mt-5 flex-col sm:flex-row'>
       
        </div> */}

          </div>
        </div>}
    </div>
  )
}

export default MySites
