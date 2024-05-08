"use client";
import dynamic from 'next/dynamic';
import React from 'react'

const PieChart = ({ series, labels, colors }) => {

    const Chart = dynamic(() => import('react-apexcharts'), {
        ssr: false,
        loading: () =>
            <p>Loading...</p>
    });

    const chartData = {
        series: series,
        options: {
            chart: {
                type: 'pie',
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: true
            },
            legend: {
                show: false,
            },
            labels: labels,
            colors: colors,
        },
    }

    return (
        <Chart options={chartData.options} series={chartData.series} type="pie" height={300} width={300} />
    )
}

export default PieChart
