import React from 'react'
import Chart from 'react-apexcharts';

const LineChart = () => {

    const chartData = {
        options: {
            chart: {
                id: 'basic-bar'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
            }
        },
        series: [
            {
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
            }
        ]
    };

    return (
        <div className='w-[97%]'>
            <Chart options={chartData.options} series={chartData.series} type="line" height={427} />
        </div>
    )
}

export default LineChart
