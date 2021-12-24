import React, { memo } from 'react';
import { Button as MuiButton, makeStyles, CircularProgress, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: 'none',
  },

  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '60%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const Button = memo(({ text, size, color, variant, onClick, loading, ...other }) => {
  const classes = useStyles();

  return (
    <>
      <MuiButton
        variant={variant || 'contained'}
        size={size || 'large'}
        color={color || 'primary'}
        onClick={onClick}
        disableElevation={true}
        {...other}
        classes={{ root: classes.root, label: classes.label }}
        disableElevation={true}
      >
        <Typography color='inherit' variant='subtitle1'>
          {text ? text : null}
        </Typography>
      </MuiButton>
      {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
    </>
  );
});

export default Button;
