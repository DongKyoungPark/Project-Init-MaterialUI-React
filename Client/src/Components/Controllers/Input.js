import React, { memo } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';

import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff',

    '& .MuiFormHelperText-contained': {
      margin: '0',
      padding: '8px 8px 0 8px',
      background: '#F6F7F9',
    },
  },
}));

const NumberFormatCustom = props => {
  const { inputRef, onChange, name, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({ target: { name, value: values.value } });
      }}
      thousandSeparator
      isNumericString
      suffix='원'
    />
  );
};

const Input = memo(({ format = 'default', variant, name, label, type, value, onChange, handleShowPassword, error = null, ...other }) => {
  const classes = useStyles();

  return (
    <>
      {format === 'default' && (
        <TextField
          classes={{ root: classes.root }}
          variant={variant || 'outlined'}
          placeholder={label}
          name={name}
          type={type || 'text'}
          value={value}
          onChange={onChange}
          InputProps={
            name === 'password' ||
            name === 'confirmPassword' ||
            name === 'originPassword' ||
            name === 'changePassword' ||
            name === 'personalNumberBack'
              ? {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={handleShowPassword}>{type === 'password' ? <Visibility /> : <VisibilityOff />}</IconButton>
                    </InputAdornment>
                  ),
                }
              : null
          }
          {...other}
          {...(error && { error: true, helperText: error })}
        />
      )}

      {format === 'number' && (
        <TextField
          variant={variant || 'outlined'}
          placeholder={label}
          name={name}
          type={type || 'text'}
          value={value}
          onChange={onChange}
          InputProps={{ inputComponent: NumberFormatCustom }}
          {...other}
          {...(error && { error: true, helperText: error })}
        />
      )}
    </>
  );
});

export default Input;
