import { Box } from '@mui/material';

export default function Custom404() {
  return (
    <Box
      sx={{
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#e9f2fd',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 600,
          borderRadius: 4,
          boxShadow: 4,
          padding: 4,
        }}
      >
        Not found
      </Box>
    </Box>
  );
}
