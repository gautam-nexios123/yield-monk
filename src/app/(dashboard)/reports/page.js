"use client";
import { Button, FormControl, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomMultiSelect from '@/common/CustomMultiSelect';
import CustomSelect from '@/common/CustomSelect';
import CustomDateRangePicker from '@/components/dashboard/CustomDateRangePicker';
import FilterSelect from '@/common/FilterSelect';
import CustomButton from '@/common/CustomButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import CustomeTable from '@/components/CustomeTable';
import SaveIcon from '@mui/icons-material/Save';
import LineChart from '@/components/LineChart';
import ScheduleDialog from '@/components/reports/ScheduleDialog';
import SavedReport from '@/components/reports/SavedReport';



const dataValueArray = [
    'Site',
    'Page Group',
    'Page Variation',
    'Page Variation Type',
    'Device',
    'Traffic Channel',
    'Ad Unit',
    'Network',
    'Ad Unit Type',
    'Country',
    'Revenue Channel',
    'Ad Format Type',
];

const tableData = [
    { "Date": '2008/11/28', "Day": "Monday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Monday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Tuesday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Monday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Monday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Wednesday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Monday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Monday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Monday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Friday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Monday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Monday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Saturday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Monday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Monday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Sunday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 },
    { "Date": '2008/11/28', "Day": "Monday", "PageViews": 40000, "PageRPM": 25738, "Impression": 25000, "AdCPM": 0.15, "Net Review": 217000 }
];

const sitetableData = [
    {
        "ReportName": "Report Name",
        "Frequency": "Once",
        "LastUpdated": "2024-04-07 22:55:04",
        "Status": "Done"
    },
    {
        "ReportName": "Report Name",
        "Frequency": "Once",
        "LastUpdated": "2024-04-07 22:55:04",
        "Status": "Done"
    },
    {
        "ReportName": "Report Name",
        "Frequency": "Once",
        "LastUpdated": "2024-04-07 22:55:04",
        "Status": "Done"
    },
    {
        "ReportName": "Report Name",
        "Frequency": "Once",
        "LastUpdated": "2024-04-07 22:55:04",
        "Status": "Done"
    },
];

const categoriesMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", "Nov", "Dec"]

const Reports = () => {
    const [selctedValue, setSelectedValue] = useState([]);
    const [nestedSelectedValue, setNestedSelectedValue] = useState("");
    const [interVal, setInterVal] = useState('Daily');
    const [seriesData, setSeriesData] = useState([{
        name: 'YieldMonk',
        data: [150, 180, 210, 190, 220, 200, 250, 280, 300, 270, 260, 240]
    }]);
    const [colors, setColors] = useState(['#4680FF']); // Define your initial colors array
    const [revenue, setRevenue] = useState(false)
    const [ymPageView, setYmPageView] = useState(false)
    const [ymPageRPM, setYmPageRPM] = useState(false)
    const [impression, setImpression] = useState(false)
    const [adCPM, setAdCPM] = useState(false)
    const [openReport, setOpenReport] = useState(false);
    const [openSchedule, setOpenSchedule] = useState(false);
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);


    const handleClickOpenReport = () => {
        setOpenReport(true);
    };
    const handleCloseReport = () => {
        setOpenReport(false);
    };

    const handleClickOpenSchedule = () => {
        setOpenSchedule(true);
    };
    const handleCloseSchedule = () => {
        setOpenSchedule(false);
    };

    const handleChangeAll = (event) => {
        setInterVal(event.target.value);
    };



    // handleadd data
    const handleAddData = (nameValue) => {
        console.log("nameValue", nameValue)
        let newDataPoint = {};
        let newColor = "";
        if (nameValue === "Page Views" && !ymPageView) {

            setYmPageView(true)
            newDataPoint = {
                name: 'Page Views',
                data: [40, 50, 55, 59, 49, 80, 70, 85, 110, 95, 60, 75]
            };
            newColor = "#E58A00";


        }
        else if (nameValue === "Page RPM" && !ymPageRPM) {
            setYmPageRPM(true)
            newDataPoint = {
                name: 'Page RPM',
                data: [40, 100, 55, 59, 49, 90, 70, 74, 63, 95, 12, 75]
            };
            newColor = "#F02020";
        }
        else if (nameValue === "Impressions" && !impression) {
            setImpression(true)
            newDataPoint = {
                name: 'Impression',
                data: [80, 100, 55, 59, 49, 100, 70, 74, 45, 95, 63, 75]
            };
            newColor = "#2CA87F";
        }
        else if (nameValue === "Ad eCPM" && !adCPM) {

            setAdCPM(true);
            newDataPoint = {
                name: 'Ad eCPM',
                data: [180, 80, 100, 180, 80, 100, 70, 60, 30, 45, 63, 40]
            };
            newColor = "#194569";

        } else {
            return;
        }


        if (!ymPageView || !ymPageRPM || !impression || !adCPM) {
            const updatedSeriesData = [...seriesData, newDataPoint];
            const updateColor = [...colors, newColor];
            setSeriesData(updatedSeriesData);
            setColors(updateColor)
        }
    };

    // handlereset
    const handleReset = () => {
        setYmPageView(false)
        setYmPageRPM(false)
        setImpression(false)
        setAdCPM(false);

        setSeriesData([{
            name: 'YieldMonk',
            data: [150, 180, 210, 190, 220, 200, 250, 280, 300, 270, 260, 240]
        }])
    }

    return (
        <div className='w-full relative bg-white dark:bg-[#1E1E1E] px-[25px] my-[31px]'>
            <div className='w-full flex items-center justify-between border border-[#EFEFEF] p-[16px] rounded-lg'>
                <div className='font-sans font-bold text-xl flex items-center gap-2'>
                    <ArrowBackIcon className='cursor-pointer' />Reports
                </div>
                <Button variant="outlined" className='text-[#262626] dark:text-white font-sans font-normal text-[14px] border-[#D9D9D9] capitalize'>Export</Button>
            </div>
            <div className='flex flex-col sm:flex-row justify-between gap-[20px] sm:items-center mt-[35px]'>
                <div>
                    <div className='text-[#s000000] font-inter font-medium text-sm pb-4'>Report By</div>
                    <CustomMultiSelect dataValueArray={dataValueArray} selctedValue={selctedValue} setSelectedValue={setSelectedValue} checkBoxShox={true} />
                </div>
                <div>
                    <div className='text-[#s000000] font-inter font-medium text-sm pb-4'>Interval</div>
                    <CustomSelect value={interVal} handleChange={handleChangeAll} menuList={["Daily", "Monthly", "Cumulative"]} width={90} textColor={"#4680FF"} borderColor={"#4680FF"} />
                </div>
                <div>
                    <div className='text-[#s000000] font-inter font-medium text-sm pb-4'>Date Range</div>
                    <CustomDateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
                </div>
            </div>
            <p className='text-[#000000] dark:text-white font-inter font-medium text-sm pt-[23px] pb-[9px]'>Filter</p>
            <div className='w-full flex justify-between flex-col xl:flex-row xl:gap-8 gap-0'>
                <div className='w-[70%] mb-3'>
                    <FilterSelect dataValueArray={dataValueArray} nestedSelectedValue={nestedSelectedValue} setNestedSelectedValue={setNestedSelectedValue} />
                </div>
                <div className='mb-3'>
                    <CustomButton btnText={"Create New Report"} btnIcon={<AddCircleOutlineIcon fontSize='small' className='mr-2' />} btnHeight={"37px"} />
                </div>
                <CustomButton btnText={"Generate Report"} btnIcon={<ReportGmailerrorredIcon fontSize='small' className='mr-2' />} btnHeight={"37px"} />
            </div>
            <div className='w-full mt-8'>
                <p className='font-inter font-medium text-[14px] text-black dark:text-white'>Report Name</p>
                <div className='flex gap-6 justify-start mt-3'>
                    <FormControl sx={{ width: '50%', }} variant="outlined">
                        <OutlinedInput
                            id="org-name"
                            aria-describedby="org-name-helper"
                            inputProps={{
                                'aria-label': 'organisation name',
                            }}
                            className='text-black dark:text-white'
                            sx={{ borderRadius: "8px !important", height: "42px" }}

                        />
                    </FormControl>
                    <CustomButton btnText={"Save Report"} handleClick={handleClickOpenReport} btnIcon={<SaveIcon fontSize='small' className='mr-2' />} btnHeight={"42px"} />
                </div>
            </div>
            <div className='flex justify-start gap-5 mt-8'>
                <CustomButton btnText={"View Save Report"} btnIcon={<SaveIcon fontSize='small' className='mr-2' />} btnHeight={"37px"} />
                <CustomButton btnText={"Schedule Report"} handleClick={handleClickOpenSchedule} btnIcon={<SaveIcon fontSize='small' className='mr-2' />} btnHeight={"37px"} />

            </div>

            <div className='mt-10 mb-10 w-full'>
                <div className='flex justify-between'>
                    <div className='w-[20%] h-[25%] flex justify-center cursor-pointer bg-[#FAFAFA] px-[16px] py-[9px]' style={{ borderTopRightRadius: "8px", borderTopLeftRadius: "8px" }} onClick={() => {
                        setRevenue(true)
                        handleReset()
                    }}>
                        <p className='font-inter font-medium text-[14px] text-[#4680FF] '>Net Revenue</p>
                    </div>
                    <div className={`w-[20%] h-[25%] flex justify-center cursor-pointer px-[16px] py-[9px] ${ymPageView ? "bg-[#FFF9F0]" : "bg-transparent"} ${ymPageView ? "text-[#E58A00]" : "text-[#1E1E1E] dark:text-white"}`} style={{ borderTopRightRadius: "8px", borderTopLeftRadius: "8px" }} onClick={() => handleAddData("Page Views")}>
                        <p className='font-inter font-medium text-[14px]'>YM Page Views</p>
                    </div>
                    <div className={`w-[20%] h-[25%] flex justify-center cursor-pointer px-[16px] py-[9px] ${ymPageRPM ? "bg-[#FFF6F6]" : "bg-transparent"} ${ymPageRPM ? "text-[#F02020]" : "text-[#1E1E1E] dark:text-white"}`} style={{ borderTopRightRadius: "8px", borderTopLeftRadius: "8px" }} onClick={() => handleAddData("Page RPM")}>
                        <p className='font-inter font-medium text-[14px]'>YM Page RPM</p>
                    </div>
                    <div className={`w-[20%] h-[25%] flex justify-center cursor-pointer px-[16px] py-[9px] ${impression ? "bg-[#F2FFFB]" : "bg-transparent"} ${impression ? "text-[#2CA87F]" : "text-[#1E1E1E] dark:text-white"}`} style={{ borderTopRightRadius: "8px", borderTopLeftRadius: "8px" }} onClick={() => handleAddData("Impressions")}>
                        <p className='font-inter font-medium text-[14px]'>Impressions</p>
                    </div>
                    <div className={`w-[20%] h-[25%] flex justify-center cursor-pointer px-[16px] py-[9px]  ${adCPM ? "bg-[#EBF6FF]" : "bg-transparent"} ${adCPM ? "text-[#194569]" : "text-[#1E1E1E] dark:text-white"} `} style={{ borderTopRightRadius: "8px", borderTopLeftRadius: "8px" }} onClick={() => handleAddData("Ad eCPM")}>
                        <p className='font-inter font-medium text-[14px]'>Ad eCPM</p>
                    </div>
                </div>
                <LineChart categories={categoriesMonth} seriesData={seriesData} colors={colors} />
            </div>
            <CustomeTable tableData={tableData} serchFilterKey="Day" totalRowShowReport={true} pagginationShow={true} />
            <div>

            </div>
            {
                openReport && <SavedReport sitetableData={sitetableData} handleCloseReport={handleCloseReport} openReport={openReport} />
            }
            {
                openSchedule && <ScheduleDialog handleCloseSchedule={handleCloseSchedule} openSchedule={openSchedule} />
            }

        </div>
    )
}

export default Reports
