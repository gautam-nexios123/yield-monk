import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CustomSelect from '@/common/CustomSelect';
import CustomeTable from '../CustomeTable';

const SiteWiseTable = () => {

    const [day, setDay] = useState('today');

    const handleChangeDay = (event) => {
        setDay(event.target.value);
    };

    const tableData = [
        { "Site Name": 'First Site', "YM Page Views": "5120", "YM Page RPM": "$0.08", "Impressions": "153,831", "Ad eCPM": "$0.16", "Net Revenue": "$162,700" },
        { "Site Name": 'Second Site', "YM Page Views": "4120", "YM Page RPM": "$0.18", "Impressions": "25,831", "Ad eCPM": "$0.16", "Net Revenue": "$162,700" },
        { "Site Name": 'Three Site', "YM Page Views": "320", "YM Page RPM": "$20.5", "Impressions": "88,831", "Ad eCPM": "$0.16", "Net Revenue": "$162,700" },
        { "Site Name": 'Four Site', "YM Page Views": "555", "YM Page RPM": "$0.01", "Impressions": "96,831", "Ad eCPM": "$0.16", "Net Revenue": "$162,700" },
        { "Site Name": 'hello Site', "YM Page Views": "8952", "YM Page RPM": "$0.07", "Impressions": "140", "Ad eCPM": "$0.16", "Net Revenue": "$162,700" },
        { "Site Name": 'Gb Site', "YM Page Views": "111", "YM Page RPM": "$0.44", "Impressions": "12025", "Ad eCPM": "$0.16", "Net Revenue": "$162,700" },
        { "Site Name": 'Kakadi Site', "YM Page Views": "1010", "YM Page RPM": "$0.88", "Impressions": "520", "Ad eCPM": "$0.16", "Net Revenue": "$162,700" },
    ];

    return (
        <div className='w-fulll border border-[#DBE0E5] rounded-lg p-[20px] mb-[24px]'>
            <div className='flex items-center justify-between'>
                <MoreVertIcon className='text-[#5B6B79] cursor-pointer' />
                <div className='text-[#1D2630] font-semibold font-inter text-base'>Site Wise</div>
                <CustomSelect value={day} handleChange={handleChangeDay} menuList={["today", "yesterday", "last 7 days", "last 30 days", "this month", "last month"]} width={100} textColor={"#1E1E1E"} borderColor={"#DBE0E5"} />
            </div>
            <div className='mt-5'>
                <CustomeTable tableData={tableData} serchFilterKey="Site Name" />
            </div>
        </div>
    )
}

export default SiteWiseTable
