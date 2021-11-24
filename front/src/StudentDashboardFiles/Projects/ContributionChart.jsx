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
  height: '50%',
  width : '50%',
  marginLeft: '5%',
  marginTop: '0%',

};



export default function PieChart(props) {


    return (
      <Paper style={chart_style} elevation={1}>
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
                  subtitle: 'Count of status of tasks for each student ',
                },
              }}
              // For tests
              rootProps={{ 'data-testid': '2' }}
            />
      </Paper>
    );
  }

