import React, { memo } from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 0,
  },

  secondary: {
    backgroundColor: theme.palette.secondary.light,
    '& .MuiButton-label': {
      color: theme.palette.secondary.main,
    },
  },

  primary: {
    backgroundColor: theme.palette.primary.light,
    '& .MuiButton-label': {
      color: theme.palette.primary.main,
    },
  },
}));

const ActionButton = memo(({ color, children, onClick }) => {
  const classes = useStyles();

  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
      {children}
    </Button>
  );
});

export default ActionButton;
