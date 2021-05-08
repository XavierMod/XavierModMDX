import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 70px 0;
`;

const RadarChart = () => {

    const [dataChart, setDataChart] = useState({
        labels: ["Front-End Development", "Back-End Development", "UX/UI", "Product Vision", "Problem-solving", "Experience", "Self-motivation"],
        datasets: [
            {
                label: "Xavier Mod",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [95, 77, 88 , 94, 90, 75, 95]
            }
        ]
    });

    const [options, setOptions ] = useState({
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 50,
                suggestedMax: 100
            }
        }
    })
    

    return (
        <Wrapper>
            <Radar 
                data={dataChart}
                options={options} />
        </Wrapper>
    )
}

export default RadarChart
