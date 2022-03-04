import React from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

const RadialChart = (props) => {
  const options = {
    chart: {
      height: 250,
      type: 'radialBar',
    },
    color: ['red'],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '60%',
        },
        dataLabels: {
          showOn: 'always',
          name: {
            offsetY: 0,
            show: false,
            color: '#5198FF',
            fontSize: '10px',
          },
          value: {
            offsetY: 4,
            color: props.color,
            fontSize: '20px',
            margin: '10px',
            show: true,
          },
        },
      },
      fill: {},
    },
    fill: {
      type: 'solid',
      colors: [props.color],
    },
  };
  const series = [props.percent];

  return (
    <RaidalContainer>
      <Chart options={options} series={series} type="radialBar" height={props.size} />
    </RaidalContainer>
  );
};

export default RadialChart;

const RaidalContainer = styled.div`
  width: 100px;
`;
