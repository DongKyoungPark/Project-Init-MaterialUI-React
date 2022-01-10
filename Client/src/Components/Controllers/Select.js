import React, { memo } from 'react';
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  selectRoot: {
    height: 'auto',
    marginBottom: theme.spacing(2),
    // '& .MuiSelect-select': {
    //   padding: '11px !important',
    // },
  },
}));

const Select = memo(
  ({ variant, name, chip, label, value, error = null, onChange, options, initSelect, width, maxWidth, className, multiple = false, ...other }) => {
    const classes = useStyles();

    const StyledMenuItem = withStyles(theme => ({
      root: {
        '&:hover': {
          color: '#fff',
          backgroundColor: '#2E3441',
          '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: theme.palette.common.white,
          },
        },
      },
    }))(MenuItem);

    return (
      <FormControl
        variant={variant || 'outlined'}
        {...(error && { error: true })}
        style={{ width: width, maxWidth: maxWidth }}
        className={clsx(classes.selectRoot, className)}
      >
        {label ? <InputLabel>{label}</InputLabel> : null}
        <MuiSelect label={label} name={name} value={value} onChange={onChange} displayEmpty multiple={multiple} {...other}>
          {initSelect ? (
            <StyledMenuItem value='' disabled>
              {initSelect}
            </StyledMenuItem>
          ) : null}
          {options.map(item => (
            <StyledMenuItem key={item.id} value={item.id}>
              {item.title}
            </StyledMenuItem>
          ))}
        </MuiSelect>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    );
  },
);

export default Select;
