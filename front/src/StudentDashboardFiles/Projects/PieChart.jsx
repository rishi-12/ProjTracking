import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


export default function PieChart(props) {
  const chartData = [
    { status: 'To Do', tasks: 8 },
    { status: 'Completed', tasks: 15 },
    { status: 'In Progress', tasks: 7 },
  ];
    // const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="tasks"
            argumentField="status"
          />
          <Title
            text="Progress Report"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }

