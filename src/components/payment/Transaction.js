"use client"
import CustomSelect from '@/common/CustomSelect';
import { OutlinedInput, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from '@mui/material';

import React, { useState } from 'react';

import CustomeTable from '../CustomeTable';



const Transaction = () => {
 
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filterValue, setFilterValue] = useState("");

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        

    ];
    const handleChangeAll = (event) => {
        setRowsPerPage(event.target.value);
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
            <CustomeTable rows={rows} filterValue={filterValue} rowsPerPage={rowsPerPage}  />
        </div>
    )
}


export default Transaction
