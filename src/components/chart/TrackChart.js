import React from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

const xAxis = ["1'03", "1'09", "1'15", "1'"];

const TrackChart = (props) => {
  const options = {
    series: [
      {
        name: '순위',
        data: [0.1, 2.41, 4.24, 3.78, 2.36, 1.54, 0.96, 0.67, 0.24, 0.12, 0.07],
      },
    ],
    chart: {
      offsetX: -10,
      offsetY: -15,
      zoom: {
        enabled: false,
      },
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    fill: {
      colors: '#3182FF',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    markers: {
      size: 3,
      colors: '#5198FF',
      stokeColors: '#5198FF',
      strokeOpacity: 0,
      fillOpacity: 0,
      radius: 2,
      hover: {
        size: 3,
      },
    },
    xaxis: {
      categories: ["1'03", "1'09", "1'15", "1'21", "1'27", "1'33", "1'39", "1'45", "1'51", "1'57", "1'63"],
      max: "1'57",
      show: true,
      labels: {
        show: true,
      },
      tooltip: {
        enabled: false,
      },
      crosshairs: {
        show: true,
        width: 2,
      },
    },
    yaxis: {
      reversed: false,
      logBase: 1,
      min: 0,
      max: 5,
      thickAmount: 10,
      forceNiceScale: false,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#E6E6E6',
      },
      labels: {
        show: true,
      },
    },
  };

  return (
    <LineContainer>
      <Chart options={options} series={options.series} type="area" height={props.size} />
    </LineContainer>
  );
};

export default TrackChart;

const LineContainer = styled.div`
  width: 300px;
`;
