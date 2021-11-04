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
  const [c1,setC1]=useState(props.c1);
  const [c2,setC2]=useState(props.c2);
  const [c3,setC3]=useState(props.c3); 
  const chartData = [
    { status: 'To Do', tasks: 3 },
    { status: 'Completed', tasks: 4 },
    { status: 'In Progress', tasks: 10 },
  ];
    // const { data: chartData } = this.state;

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

