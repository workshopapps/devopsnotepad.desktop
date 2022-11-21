import React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#102A63' : '#102A63',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#102A63' : '#102A63',
    boxSizing: 'border-box',
  },
}));

const ToggleSwitch = ({ toggleMonthly, handleToggle }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      spacing={1}
      alignItems="center"
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontFamily: 'Manrope',
          color: !toggleMonthly ? '#202020' : '#6F6F6F',
          fontWeight: !toggleMonthly ? '700' : '500',
        }}
      >
        Monthly
      </Typography>
      <AntSwitch
        checked={toggleMonthly}
        onChange={handleToggle}
        inputProps={{ 'aria-label': 'ant design' }}
      />
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontFamily: 'Manrope',
          color: !toggleMonthly ? '#6F6F6F' : '#202020',
          fontWeight: !toggleMonthly ? '500' : '700',
        }}
      >
        Yearly
      </Typography>
    </Stack>
  );
};

export default ToggleSwitch;
