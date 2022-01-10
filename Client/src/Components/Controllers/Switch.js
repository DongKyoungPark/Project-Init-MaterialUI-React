import React, { memo } from 'react';
import { FormControl, FormControlLabel, Switch as MuiSwitch } from '@mui/material';

// const useStyles = makeStyles(theme => ({}));

const Switch = memo(({ name, label, value, onChange }) => {
  // const classes = useStyles();

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <>
      <FormControl>
        <FormControlLabel
          control={<MuiSwitch name={name} color='primary' checked={value} onChange={e => onChange(convertToDefEventPara(name, e.target.checked))} />}
          label={label}
        />
      </FormControl>
    </>
  );
});

export default Switch;
