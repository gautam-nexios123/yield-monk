import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react';
import settingIcon from "../../assets/mysites/settingIcon.svg";
import infoIcon from "../../assets/mysites/Info.svg";

const ManageApps = ({ cardData }) => {
    return (
        <div className='flex w-[100%] flex-wrap gap-5'>
            {
                cardData.map((item, index) => {
                    return (
                        <Card sx={{ maxWidth: "371px", maxHeight: "367px" }} key={index} className='border border-[#EFEFEF] rounded-lg mt-6 h-auto'>
                            <Image src={item.image} alt={`${item.name}`} />
                            <CardContent >
                                <Typography gutterBottom className='text-[#1E1E1E] text-[16px] font-normal'>
                                    {item.name}
                                </Typography>
                                <Typography className='text-[#1E1E1E] text-[14px] font-normal'>
                                    Status: <span className={`${item.status === "Active" ? "text-[#0FA315]" : "text-[#CD0B0B]"} text-[14px] font-normal`}>{item.status}</span>
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ borderTop: 1, borderColor: "#EFEFEF" }} className=' grid grid-cols-2 '>
                                <Button size="small" sx={{
                                    borderRight: 1,
                                    borderColor: "#EFEFEF",
                                    borderRadius: 0,
                                    '&:hover': {
                                        backgroundColor: 'transparent', // Remove background color on hover
                                    },
                                }}>
                                    <Image src={settingIcon} alt='settingIcon' />

                                </Button>
                                <Button size="small" sx={{

                                    '&:hover': {
                                        backgroundColor: 'transparent', // Remove background color on hover
                                    },
                                }}>
                                    <Image src={infoIcon} alt='infoIcon' />


                                </Button>
                            </CardActions>
                        </Card>
                    )

                })
            }

        </div>
    )
}

export default ManageApps
