import { CircularProgress, Typography, Box } from '@mui/material';

const PageLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <CircularProgress />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default PageLoader;
