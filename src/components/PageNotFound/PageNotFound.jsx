import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Container
      sx={{
        textAlign: 'center',
        mt: 8,
      }}
    >
      <Typography variant="h1" color="primary">
        404
      </Typography>
      <Typography variant="h5" color="textSecondary" paragraph>
        Oops! The page you are looking for does not exist.
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="primary" component={Link} to="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default PageNotFound;
