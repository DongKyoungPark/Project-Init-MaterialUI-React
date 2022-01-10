import React, { useState, memo } from 'react';
import { Grid, Typography } from '@mui/material';

import { UseForm } from '../../Custom/UseForm';
import Controller from '../../Components/Controllers/Controller';

import clsx from 'clsx';
import globalUseStyles from '../../globalStyles';
import useStyles from './Styles';

const Main = memo(() => {
  const gClasses = globalUseStyles();
  const classes = useStyles();

  // init values
  const initialValues = {};

  // validation
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    setErrors({ ...temp });
    if (fieldValues === values) return Object.values(temp).every(x => x === '');
  };

  const { values, errors, setErrors, handleInputChange } = UseForm(initialValues, true, validate);

  return (
    <>
      <Grid className={clsx(gClasses.root)}>
        <Typography color='inherit' variant='h6'>
          Main
        </Typography>
      </Grid>
    </>
  );
});

export default Main;
