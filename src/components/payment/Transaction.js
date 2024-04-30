"use client"
import CustomSelect from '@/common/CustomSelect';
import { OutlinedInput, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from '@mui/material';
import { styled } from '@mui/styles';
import React, { useState } from 'react';
import Sort from "../../assets/payment/sort.svg";
import Image from 'next/image';



const Transaction = () => {
    const [rowsPerPage, setRowsPerPage] = useState('all');
    const [sortBy, setSortBy] = useState({ column: null, direction: 'asc' });



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

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const handleChangeAll = (event) => {
        setRowsPerPage(event.target.value);
    };

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

    return (

        <div>
            <div className='flex justify-between'>
                <div className='flex gap-2 mt-5'>
                    <p className='font-inter font-normal text-[14px] text-[#353535] mt-2'>Row per page</p>
                    <CustomSelect value={rowsPerPage} handleChange={handleChangeAll} menuList={["all", "one", "two"]} width={70} />
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
                    />
                </div>
            </div>
            <TableContainer component={Paper} className='mt-5'>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell onClick={() => handleSort('name')}>
                                <div className='flex  gap-2'>
                                    Dessert (100g serving) <Image src={Sort} alt='sort' />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell onClick={() => handleSort('calories')} align="right">
                                <div className='flex  gap-2'>
                                    Calories <Image src={Sort} alt='sort' />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell onClick={() => handleSort('fat')} align="right">
                                <div className='flex gap-2'>
                                    Fat&nbsp;(g) <Image src={Sort} alt='sort' />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell onClick={() => handleSort('carbs')} align="right">
                                <div className='flex gap-2'>
                                    Carbs&nbsp;(g) <Image src={Sort} alt='sort' />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell onClick={() => handleSort('protein')} align="right">
                                <div className='flex items-center gap-2'>
                                    Protein&nbsp;(g) <Image src={Sort} alt='sort' />
                                </div>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedRows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}


export default Transaction
