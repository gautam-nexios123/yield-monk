"use client"
import { OutlinedInput, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, tableCellClasses } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/styles';
import Sort from "../assets/payment/sort.svg";
import Invocie from "../assets/payment/invoice.svg";
import Image from 'next/image';
import CustomSelect from '@/common/CustomSelect';
import { useTheme } from 'next-themes';
import { darkThemePagination, lightThemePagination } from '@/utils';

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

const CustomeTable = ({ tableData, serchFilterKey, totalRowShow, pagginationShow, invoiceShow, totalRowShowReport }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filterValue, setFilterValue] = useState("");
    const [sortOrder, setSortOrder] = useState('desc');
    const [sortByColumn, setSortByColumn] = useState('');
    const [showTablePagination, setShowTablePagination] = useState(false);

    const { theme } = useTheme();

    const filteredRows = tableData?.filter(row =>
        row[serchFilterKey]?.toLowerCase().includes(filterValue?.toLowerCase())
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

    useEffect(() => {
        setShowTablePagination(true)
    }, [])

    return (
        <div>
            <div className='flex justify-between flex-col sm:flex-row'>
                <div className='flex gap-2 mt-5'>
                    <p className='font-inter font-normal text-[14px] text-[#353535] dark:text-white mt-2'>Row per page</p>
                    <CustomSelect value={rowsPerPage} handleChange={handleChangeAll} menuList={[5, 10, 15, 25]} width={70} textColor={"#1E1E1E"} borderColor={"#DBE0E5"} />
                    <p className='font-inter font-normal text-[14px] text-[#353535] dark:text-white mt-2'>entries</p>
                </div>
                <div className='flex gap-2 mt-5'>
                    <p className='font-inter font-normal text-[14px] text-[#353535] dark:text-white mt-1'>Search: </p>
                    <OutlinedInput
                        id="org-name"
                        aria-describedby="org-name-helper"
                        inputProps={{
                            'aria-label': 'organisation name',
                        }}
                        className='text-[#353535] dark:text-white'
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
                            {invoiceShow && <StyledTableCell className='cursor-pointer' align="right">
                                <div className='flex  gap-2'>
                                    Invoice
                                </div>
                            </StyledTableCell>}
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
                                {invoiceShow && <StyledTableCell align="start">
                                    <Image src={Invocie} alt='invoice' />
                                </StyledTableCell>}
                            </StyledTableRow>

                        )) :
                            <StyledTableRow>
                                <StyledTableCell align="center" colSpan={12}>
                                    No data Found
                                </StyledTableCell>
                            </StyledTableRow>
                        }
                        {totalRowShow && <StyledTableRow >
                            <StyledTableCell align="start" colSpan={1}>
                                Total
                            </StyledTableCell>
                            <StyledTableCell align="start">

                            </StyledTableCell>
                            <StyledTableCell align="start" colSpan={10} >
                                5258522
                            </StyledTableCell>
                        </StyledTableRow>}
                        {
                            totalRowShowReport &&
                            <StyledTableRow >
                                <StyledTableCell align="start" colSpan={1}>
                                    Total
                                </StyledTableCell>
                                <StyledTableCell align="start">

                                </StyledTableCell>
                                <StyledTableCell align="start" colSpan={1} sx={{ borderRight: 2, borderColor: "#FAFAFA" }} >
                                    5258522
                                </StyledTableCell>
                                <StyledTableCell align="start" colSpan={1} >
                                    52
                                </StyledTableCell>
                                <StyledTableCell align="start" colSpan={1} >
                                    85932
                                </StyledTableCell>
                                <StyledTableCell align="start" colSpan={1} >
                                    9622
                                </StyledTableCell>
                                <StyledTableCell align="start" colSpan={1} >
                                    96322
                                </StyledTableCell>
                            </StyledTableRow>
                        }
                    </TableBody>
                </Table>


            </TableContainer>
            {pagginationShow && <div className='flex justify-between mt-3 p-5 flex-col sm:flex-row'>
                <p className='mb-5 sm:mb-0'>Showing {filteredRows.length > 0 ? ((currentPage - 1) * rowsPerPage + 1) : 0} to {(currentPage * rowsPerPage) > filteredRows.length ? filteredRows.length : (currentPage * rowsPerPage)} of {filteredRows.length} entries</p>
                {
                    showTablePagination && <ThemeProvider theme={theme === "light" ? lightThemePagination : darkThemePagination}>
                        <Pagination
                            onChange={(e, currentPage) => handlePageChange(e, currentPage)}
                            page={currentPage}
                            siblingCount={0}
                            boundaryCount={1}
                            variant="outlined"
                            shape="rounded"
                            onNextClick={() => handleNextPage()}
                            onPrevClick={() => handlePrevPage()}
                            count={totalPages}
                        />
                    </ThemeProvider>
                }
            </div>}
        </div>
    )
}

export default CustomeTable
