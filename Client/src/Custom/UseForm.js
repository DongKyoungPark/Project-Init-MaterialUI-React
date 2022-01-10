import React, { useState, memo } from 'react';
// import { makeStyles } from '@mui/material';

export const UseForm = (initialValues, validateOnChange = false, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = e => {
    const { name, value } = e.target;
    // console.log({ name, value });
    setValues({ ...values, [name]: value });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, setValues, errors, setErrors, handleInputChange, resetForm };
};

// const useStyles = makeStyles(theme => ({
//   form: {
//     '& .MuiFormControl-root': {
//       width: '80%',
//       margin: theme.spacing(1),
//     },
//   },
// }));

export const Form = memo(({ children, width, ...other }) => {
  const style = {
    width: width,
    margin: '8px',
  };

  return (
    <form style={style} autoComplete='off' {...other}>
      {children}
    </form>
  );
});
