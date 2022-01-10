import React, { useState, memo } from 'react';
import { Grid, Typography } from '@mui/material';

import { UseForm } from '../../Custom/UseForm';
import Controller from '../../Components/Controllers/Controller';

import clsx from 'clsx';
import globalUseStyles from '../../globalStyles';
import useStyles from './Styles';

const NewPage = memo(() => {
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
      <Grid container className={clsx(gClasses.root, gClasses.w100)}></Grid>
    </>
  );
});

export default NewPage;
