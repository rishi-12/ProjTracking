import * as React from 'react';
import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


const chart_style = {
  height: '20%',
  width : '40%',
  marginLeft: '20%',
  marginTop: '0%',
};


export default function PieChart(props) {

  const chartData = [
    { status: 'To Do', tasks:props.c1 },
    { status: 'Completed', tasks: props.c2 },
    { status: 'In Progress', tasks: props.c3 },
  ];

    return (
      <Paper style={chart_style}>
        <Chart 
          data={chartData}
        >
          <PieSeries
            valueField="tasks"
            argumentField="status"
            // innerRadius={0.6}
          />
          <Legend/>
          <Title
            text="Progress Report"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }

