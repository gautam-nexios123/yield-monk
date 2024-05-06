import { Box, Button, ButtonGroup, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import sunIcon from "../../assets/dashboard/sun.svg"
import Image from 'next/image';
import darkIcon from "../../assets/others/dark.svg";
import { useTheme } from 'next-themes';

const ThemeMenu = ({ handleChange, value ,themRef}) => {

    const {theme,setTheme} = useTheme();
    console.log("theme",theme)
  

    return (
        <div ref={themRef} className='absolute z-10 right-44 top-20 shadow-lg rounded-xl' >
            <Box sx={{ width: '100%' }}>
                <Tabs
                    onChange={handleChange}
                    value={value}
                    aria-label="Tabs where each tab needs to be selected manually"
                    indicatorColor='none'
                    disableRipple
                    sx={{
                        backgroundColor: "#F5F5F5",
                        padding: "0px",
                        '& .MuiTab-root': {
                            height:"42px",
                            '&.Mui-selected': {
                                borderBottom: 'none !important', // Remove bottom border when tab is selected
                            },
                        },
                    }}
                    className='rounded-xl'
                >

                    <Tab label="light"
                        // icon={<Image src={sunIcon} width={20} height={20} />}
                        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',gap:"8px",textTransform:"capitalize" }}
                        sx={{
                            '&.Mui-selected': {
                                backgroundColor: 'white',
                                borderTopRightRadius: 8,
                                borderBottomRightRadius: 8,
                                borderBottom: "none",
                                color: "#1E1E1E"
                            },
                            color: "#9FA2AA"
                        }}
                        onClick={() => setTheme('light')}
                        />
                    <Tab
                        label="dark"
                        // icon={<Image src={darkIcon} width={20} height={20} />}
                        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',gap:"8px",textTransform:"capitalize" }}
                        sx={{
                            '&.Mui-selected': {
                                backgroundColor: 'white',
                                borderTopLeftRadius: 8,
                                borderBottomLeftRadius: 8,
                                borderBottom: "none",
                                color: "#1E1E1E"
                            },
                            color: "#9FA2AA"
                        }}
                        onClick={() => setTheme('dark')}
                        />
                </Tabs>
            </Box>
        </div>
    )
}

export default ThemeMenu
