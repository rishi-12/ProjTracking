import React from 'react';

const drawerWidth = 240;

const divstyle = {
  width: '60%',
  height: '80%',
};




export default function Dashboard(props) {
  return (

        <div align="center"><h1 style={{font:'bold'}}>Welcome {props.name} !!</h1>
            <img style={divstyle} src="https://d38cf3wt06n6q6.cloudfront.net/tyasuitefront/webgpcs/images/project-tracking-software.png"></img>
         </div>

  );
}