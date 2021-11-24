import * as React from 'react';
import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
// import {
//   Chart,
//   PieSeries,
//   Title,
//   Legend
// } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

import { Chart } from "react-google-charts";


const chart_style = {
  height: '20%',
  width : '50%',
  marginLeft: '10%',
  marginTop: '0%',
};



export default function PieChart(props) {

  const chartData = [
    { status: 'To Do', tasks:props.c1 },
    { status: 'Completed', tasks: props.c2 },
    { status: 'In Progress', tasks: props.c3 },
  ];


  console.log(chartData)
    return (
      <Paper style={chart_style}>


      <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Status', 'Number'],
          ['To Do', parseInt(props.c1)],
          ['In Progress', parseInt(props.c2)],
          ['Completed', parseInt(props.c3)],
        ]}
        options={{
          title: 'Progress Report',
          // Just add this option
          is3D: true,
        }}
        rootProps={{ 'data-testid': '2' }}
      />
      </Paper>
    );
  }

