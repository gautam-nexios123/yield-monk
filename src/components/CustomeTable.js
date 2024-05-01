"use client"
import { OutlinedInput, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/styles';
import Sort from "../assets/payment/sort.svg";
import Invocie from "../assets/payment/invoice.svg";
import Image from 'next/image';
import CustomSelect from '@/common/CustomSelect';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        //   backgroundColor: "black !important",
        color: "black",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    border: "none",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "#FAFAFA",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    border: "none"
}));

const CustomeTable = ({ tableData ,serchFilterKey}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filterValue, setFilterValue] = useState("");
    const [sortOrder, setSortOrder] = useState('desc');
    const [sortByColumn, setSortByColumn] = useState('');

    const filteredRows = tableData?.filter(row =>
        row[serchFilterKey].toLowerCase().includes(filterValue.toLowerCase())
    );

    const totalPages = Math.ceil(filteredRows?.length / rowsPerPage);
    const paginatedRows = filteredRows?.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const allKeys = tableData?.reduce((keys, obj) => {
        return keys.concat(Object.keys(obj));
    }, []);

    const columns = [...new Set(allKeys)];

    const handleSortData = (column) => {
        if (sortByColumn === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortByColumn(column);
            setSortOrder('asc');
        }
    };

    const handleChangeAll = (event) => {
        setRowsPerPage(event.target.value);
        setCurrentPage(1);
    };

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
        <div>
            <div className='flex justify-between'>
                <div className='flex gap-2 mt-5'>
                    <p className='font-inter font-normal text-[14px] text-[#353535] mt-2'>Row per page</p>
                    <CustomSelect value={rowsPerPage} handleChange={handleChangeAll} menuList={[5, 10, 15, 25]} width={70} />
                    <p className='font-inter font-normal text-[14px] text-[#353535] mt-2'>entries</p>
                </div>
                <div className='flex gap-2 mt-5'>
                    <p className='font-inter font-normal text-[14px] text-[#353535] mt-1'>Search : </p>
                    <OutlinedInput
                        id="org-name"
                        aria-describedby="org-name-helper"
                        inputProps={{
                            'aria-label': 'organisation name',
                        }}
                        sx={{ borderRadius: "8px !important", height: "34px", padding: "8px 12px" }}
                        placeholder='Search'
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                    />

                </div>

            </div>
            <TableContainer component={Paper} className='mt-5'>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {columns?.map((column, index) => (
                                <StyledTableCell key={index} className='cursor-pointer' onClick={() => handleSortData(column)} align="right">
                                    <div className='flex  gap-2'>
                                        {column} <Image src={Sort} alt='sort' />
                                    </div>
                                </StyledTableCell>
                            ))}
                            <StyledTableCell className='cursor-pointer' align="right">
                                <div className='flex  gap-2'>
                                    Invoice
                                </div>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedRows.length > 0 ? paginatedRows?.sort((a, b) => {
                            const comparison = a[sortByColumn] > b[sortByColumn] ? 1 : -1;
                            return sortOrder === 'asc' ? comparison : -comparison;
                        })?.map((row, index) => (
                            <StyledTableRow key={index}>
                                {columns?.map((column, colIndex) => (
                                    <StyledTableCell key={colIndex} align="start">{row[column]}</StyledTableCell>
                                ))}
                                <StyledTableCell align="start">
                                    <Image src={Invocie} alt='invoice' />
                                </StyledTableCell>
                            </StyledTableRow>
                        )) :
                            <StyledTableRow>
                                <StyledTableCell align="center" colSpan={12}>
                                    No data Found
                                </StyledTableCell>
                            </StyledTableRow>
                        }
                    </TableBody>
                </Table>


            </TableContainer>
            <div className='flex justify-between mt-3 p-5'>
                <p>Showing {filteredRows.length > 0 ? ((currentPage - 1) * rowsPerPage + 1) : 0} to {(currentPage * rowsPerPage) > filteredRows.length ? filteredRows.length : (currentPage * rowsPerPage)} of {filteredRows.length} entries</p>
                <Pagination onChange={(e, currentPage) => handlePageChange(e, currentPage)}
                    page={currentPage}
                    siblingCount={0}
                    boundaryCount={1}
                    variant="outlined"
                    shape="rounded"
                    onNextClick={() => handleNextPage()}
                    onPrevClick={() => handlePrevPage()}
                    count={totalPages} />
            </div>
        </div>
    )
}

export default CustomeTable
