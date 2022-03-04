import React from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

const RankChart = (props) => {
  const options = {
    series: [
      {
        name: '순위',
        data: [...props.match],
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
      show: false,
      labels: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      reversed: true,
      logBase: 1,
      min: 1,
      max: 8,
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
        // minWidth: 1,
        // maxWidth: 10,
        formatter: (s) => s.toFixed(0),
      },
    },
  };

  return (
    <LineContainer>
      <Chart options={options} series={options.series} type="line" height={props.size} />
    </LineContainer>
  );
};

export default RankChart;

const LineContainer = styled.div`
  width: 300px;
`;
