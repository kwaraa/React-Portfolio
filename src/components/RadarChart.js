// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js';

// const RadarChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const data = {
//       labels: ['Python', 'Javascript', 'Java', 'HTML', 'CSS'],
//       datasets: [
//         {
//           label: "Skill level",
//           data: [6, 6, 6, 6, 6], // Example data values
//           backgroundColor: 'rgba(75, 192, 192, 0.4)', // Example background color
//           borderColor: 'rgba(75, 192, 192, 1)', // Example border color
//           borderWidth: 1,
//         },
//       ],
//     };

//     const options = {
//       scale: {
//         pointLabels: {
//             fontSize: 16,
//         },
//         ticks: { 
//             display:false,
//             beginAtZero: true },
//       },
//     };

//     const radarChart = new Chart(chartRef.current, {
//       type: 'radar',
//       data: data,
//       options: options,
//     });

//     return () => {
//       radarChart.destroy();
//     };
//   }, []);

//   return <canvas ref={chartRef} />;
// };

// export default RadarChart;

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const RadarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Python', 'Javascript', 'Java', 'HTML', 'CSS', 'React', 'Flutter', 'C', 'Jupyter Notebook', 'Microsoft Office'],
      datasets: [
        {
          label: 'Proficiency',
          data: [9,8,7,7,6,8,7,6,6,10], // Example data values
          backgroundColor: 'rgba(75, 192, 192, 0.4)', // Example background color
          borderColor: 'rgba(75, 192, 192, 1)', // Example border color
          borderWidth: 1,
          fontSize: 20,
        },
      ],
    };

    const options = {
      scale: {
        pointLabels: {
          fontSize: 16,
        },
        angleLines: {
          color: 'rgba(55, 55, 190, 1)', // Color of the lines radiating from the center
        },
        gridLines: {
          color: 'rgba(44, 55, 200, 1)', // Color of the circular grid lines
        },
        ticks: {
          display: false,
          beginAtZero: true,
          fontColor: 'rgba(100, 55, 23, 0.5)', // Color of the tick labels
        },
      },
    //   title: {
    //     display:true,
    //     text: 'Skill level',
    //     fontSize: 20,
    //   }
    };

    const radarChart = new Chart(chartRef.current, {
      type: 'radar',
      data: data,
      options: options,
    });

    return () => {
      radarChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};


export default RadarChart;
