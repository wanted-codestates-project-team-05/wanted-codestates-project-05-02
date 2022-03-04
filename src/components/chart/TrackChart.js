import React from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

// props: dataAvg(number), dataLabel(string)

const TrackChart = (props) => {
  const options = {
    series: [
      {
        name: '순위',
        data: [2.49, 2.0, 2.19, 1.45, 1.1],
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
      show: false,
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
      labels: {
        formatter: (s) => s.toFixed(2),
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
        // minWidth: 1,
        // maxWidth: 10,
        formatter: (s) => s.toFixed(0),
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
