"use client"
import { Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/styles';
import Sort from "../assets/payment/sort.svg";
import Image from 'next/image';

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

const CustomeTable = ({ rows, filterValue, rowsPerPage }) => {
    const [sortBy, setSortBy] = useState({ column: null, direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(1);








    const handleSort = (column) => {
        setSortBy(prev => ({
            column,
            direction: prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    const sortedRows = [...rows].sort((a, b) => {
        if (sortBy.column) {
            const aValue = a[sortBy.column];
            const bValue = b[sortBy.column];
            if (aValue < bValue) return sortBy.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortBy.direction === 'asc' ? 1 : -1;
            return 0;
        }
        return 0;
    });
    const filteredRows = sortedRows.filter(row =>
        row.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
    const paginatedRows = filteredRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
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
            <TableContainer component={Paper} className='mt-5'>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='right' className='cursor-pointer' onClick={() => handleSort('name')}>
                                <div className='flex justify-center  gap-2'>
                                    Dessert (100g serving) <Image src={Sort} alt='sort' />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell className='cursor-pointer' onClick={() => handleSort('calories')} align="right">
                                <div className='flex  gap-2'>
                                    Calories <Image src={Sort} alt='sort' />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell className='cursor-pointer' onClick={() => handleSort('fat')} align="right">
                                <div className='flex gap-2'>
                                    Fat&nbsp;(g) <Image src={Sort} alt='sort' />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell className='cursor-pointer' onClick={() => handleSort('carbs')} align="right">
                                <div className='flex gap-2'>
                                    Carbs&nbsp;(g) <Image src={Sort} alt='sort' />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell className='cursor-pointer' onClick={() => handleSort('protein')} align="right">
                                <div className='flex items-center gap-2'>
                                    Protein&nbsp;(g) <Image src={Sort} alt='sort' />
                                </div>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedRows.length > 0 ? paginatedRows?.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="start">{row.calories}</StyledTableCell>
                                <StyledTableCell align="start">{row.fat}</StyledTableCell>
                                <StyledTableCell align="start">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="start">{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))
                            :
                            <StyledTableRow>
                                <StyledTableCell align="center" colSpan={5}>
                                    No data Found
                                </StyledTableCell>
                            </StyledTableRow>

                        }
                    </TableBody>

                </Table>


            </TableContainer>
            <div className='flex justify-between mt-3 p-5'>
                {/* <p>Showing {(currentPage - 1) * rowsPerPage + 1} to {(currentPage * rowsPerPage) > sortedRows.length ? sortedRows.length : (currentPage * rowsPerPage)} of {sortedRows.length} entries</p> */}
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
