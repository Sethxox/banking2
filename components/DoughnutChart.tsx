"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

import React from 'react'

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    
        const data = {
          datasets: [
            {
              label: "Banks",
              data: [1250, 1550, 3200],
              backgroundColor: ["#FAD6A5", " #B87333", "#654321"],
            },
            ],
            labels: [ "Bank1", "Bank2", "Bank3" ]
        };

    return (
  
        <Doughnut
            data={data}
            options={
                {
                    cutout: "65%",
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            }
        />
  )
}

export default DoughnutChart