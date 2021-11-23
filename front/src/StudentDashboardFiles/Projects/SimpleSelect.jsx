import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [stud, setStud] = React.useState(props.defVal);
  console.log("stud");
  console.log(props.defVal);
  console.log(props.defName);
  const handleChange = (event) => {
    setStud(event.target.value);
  };
  // const projMem=[{id:1,name:"Rishi"},{id:2,name:"Surya"}];

  return (
    <div>
      
      
      
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Assign this task to
        </InputLabel>
        <br/>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={stud}
          name="selectStudent"
          onChange={handleChange}
          // displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
          {props.projMembers.map(p=>(<MenuItem value={p.id}>{p.name}</MenuItem>))}
          
          {/* <MenuItem value={20}>Twenty</MenuItem> */}
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        {/* <FormHelperText>Label + placeholder</FormHelperText> */}
      </FormControl>
    </div>
  );
}