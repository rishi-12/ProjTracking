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


    return (
      <Paper style={chart_style}>


          <Chart
                width={'500px'}
              height={'300px'}
              chartType="Bar"
              loader={<div>Loading Chart</div>}
              data={props.data}
              options={{
                // Material design options
                chart: {
                  title: 'Student Contributions',
                  subtitle: 'No of Task ToDo ,In Progress, Completed for each student ',
                },
              }}
              // For tests
              rootProps={{ 'data-testid': '2' }}
            />
      </Paper>
    );
  }

