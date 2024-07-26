import {Box, Typography} from '@mui/material';

const Title = ({title, align="left"}) => {

    return (
        <Box flex={1} marginBottom={5}>
            <Typography variant="h4" component="h4" gutterBottom color={'primary'} align={align}>
                {title}
            </Typography>
        </Box>
    );
};

export default Title;
