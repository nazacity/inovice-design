import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Button, ButtonProps, Typography } from '@mui/material';
import { COLORS } from 'theme';
import { Box } from '@mui/system';

interface IProps extends ButtonProps {
  leftIcon?: React.ReactNode;
  label: string;
  onClick: () => void;
}

const BaseContainedButton: React.FC<IProps> = ({
  leftIcon,
  label,
  onClick,
  ...props
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disableRipple
      sx={{ px: 1, ...props.sx }}
      {...props}
    >
      {leftIcon && (
        <Box
          sx={{
            bgcolor: COLORS.white,
            width: 40,
            height: 40,
            borderRadius: 20,
            mr: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {leftIcon}
        </Box>
      )}
      <Typography
        variant="h4"
        sx={{
          color: COLORS.white,
          fontWeight: 600,
          mr: 1,
          ml: leftIcon ? 0 : 1,
        }}
      >
        {label}
      </Typography>
    </Button>
  );
};

export default BaseContainedButton;
