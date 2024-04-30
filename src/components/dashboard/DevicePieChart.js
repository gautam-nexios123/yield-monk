import dynamic from 'next/dynamic';
import React from 'react'

const DevicePieChart = ({ series, labels, colors }) => {
    const Chart = dynamic(() => import('react-apexcharts'), {
        ssr: false,
        loading: () =>
            <p>Loading...</p>
    });

    const chartData = {
        series: series,
        options: {
            chart: {
                type: 'polarArea'
            },
            labels: labels,
            colors: colors,
            fill: {
                opacity: 1
            },
            yaxis: {
                show: false
            },
            legend: {
                show: false
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0
                    },
                    spokes: {
                        strokeWidth: 0
                    },
                }
            },
            
        },
    };

    return (
        <Chart options={chartData.options} series={chartData.series} type="polarArea" height={350} width={350} />
    )
}

export default DevicePieChart
