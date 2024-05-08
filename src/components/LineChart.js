"use client"
import CustomSelect from '@/common/CustomSelect';
import dynamic from 'next/dynamic';
import React, { useState } from 'react'

const LineChart = ({ categories, topLabels, colors, seriesData }) => {

    const Chart = dynamic(() => import('react-apexcharts'), {
        ssr: false,
        loading: () =>
            <p>Loading...</p>
    });

    const [linkAll, setLinkAll] = useState('all');
    const [day, setDay] = useState('today');

    const handleChangeAll = (event) => {
        setLinkAll(event.target.value);
    };
    const handleChangeDay = (event) => {
        setDay(event.target.value);
    };

    const chartData = {
        options: {
            chart: {
                id: 'basic-bar',
                toolbar: {
                    show: false
                }
            },
            xaxis: {
                categories: categories
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            zoom: {
                enabled: false
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left',
            },
            colors: colors,
            tooltip: {
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                    let tooltipContent = `<div class="apexcharts-tooltip-label" style="background-color: #f8f8f8; padding: 5px; color: #333;border-bottom: 1px solid #ccc;">${categories[dataPointIndex]}</div>`;
                    series.forEach((serie, index) => {
                        tooltipContent += `<div class="apexcharts-tooltip-label" style="background-color: #f8f8f8; padding: 5px;font-size: 12px; color: ${colors[index]};display:flex"><div style="width:8px;height:8px;border-radius:50px;margin-top:5px;background-color: ${colors[index]}"></div> &nbsp; ${w.globals.seriesNames[index]}: ${serie[dataPointIndex]}</div>`;
                    });
                    return tooltipContent;
                },
            },

        },
        series: seriesData
    };

    return (
        <div className='w-full border border-[#DBE0E5] p-[20px] rounded-lg'>
            {topLabels && <div className='flex items-center justify-between flex-wrap my-[20px] w-[97%]'>
                <div className='text-[#1D2630] dark:text-white font-semibold text-base font-inter pl-[12px] pb-3 sm:pb-0'>Total Revenue: Revenue vs Date</div>
                <CustomSelect value={day} handleChange={handleChangeDay} menuList={["today", "yesterday", "last 7 days", "last 30 days", "this month", "last month"]} width={100} textColor={"#1E1E1E"} borderColor={"#DBE0E5"} />
                <CustomSelect value={linkAll} handleChange={handleChangeAll} menuList={["all", "one", "two"]} width={70} textColor={"#1E1E1E"} borderColor={"#DBE0E5"} />
            </div>}
            <div className='w-[97%] relative'>
                {topLabels && <div className='absolute right-0 top-[4px] sm:top-0 flex items-center gap-2'>
                    <div className='text-[#1D2630] dark:text-white font-inter font-semibold text-base'>
                        5.44%
                    </div>
                    <div className='bg-[#4CB592] rounded-md py-[2px] px-[6px] text-white font-medium font-inter text-xs'>+2.6%</div>
                </div>}
                <Chart options={chartData.options} series={chartData.series} type="line" height={427} width={"100%"} />
            </div>
        </div>
    )
}

export default LineChart
