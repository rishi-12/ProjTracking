import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPlacement() {
  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">labelPlacement</FormLabel> */}
      <RadioGroup row aria-label="position" name="position" defaultValue="todo">
        <FormControlLabel
          value="todo"
          control={<Radio color="primary" />}
          label="To Do"
          labelPlacement="top"
        />
        <FormControlLabel
          value="inprogress"
          control={<Radio color="primary" />}
          label="In Progress"
          labelPlacement="top"
        />
        <FormControlLabel
          value="completed"
          control={<Radio color="primary" />}
          label="Completed"
          labelPlacement="top"
        />
        {/* <FormControlLabel value="end" control={<Radio color="primary" />} label="End" /> */}
      </RadioGroup>
    </FormControl>
  );
}
