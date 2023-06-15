import React from 'react';
import './Content.css'
import { Box, Typography } from '@mui/material';

const Content = (props) => {
    return (
        <Box>
            <Typography variant="p">{props.text}</Typography>
        </Box>
    );
}

export default Content;
