import React, { memo } from 'react';
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const RadioGroup = memo(({ name, label, value, onChange, items }) => {
  return (
    <FormControl>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map(item => (
          <FormControlLabel key={item.id} value={item.title} control={<Radio color='primary' />} label={item.title ? item.title : null} />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
});

export default RadioGroup;
