import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ArrowDownIcon from '../../../public/icons/svg/ArrowDownIcon';
import BaseContainedButton from 'component/basecomponents/basebutton/BaseContainedButton';
import PlusIcon from '../../../public/icons/svg/PlusIcon';
import { COLORS } from 'theme';

interface IProps {
  total: number;
}

const ActionBar: React.FC<IProps> = ({ total }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <Typography variant="h1" color="black">
          {t('common:invoices')}
        </Typography>
        <Typography>
          {t('common:there_are')} {total} {t('common:total_invoices')}
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mr: 3,
          cursor: 'pointer',
          '&:hover': {
            h4: { color: COLORS.primary.main },
          },
        }}
      >
        <Typography
          variant="h4"
          color="black"
          sx={{
            mr: 3,
            fontWeight: 600,
          }}
        >
          {t('common:filter_by_status')}
        </Typography>
        <ArrowDownIcon />
      </Box>
      <BaseContainedButton
        label={t('common:new_invoice')}
        onClick={() => {}}
        leftIcon={<PlusIcon />}
      />
    </Box>
  );
};

export default ActionBar;
