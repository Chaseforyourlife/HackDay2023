import React from 'react';
import { Box, Typography } from '@mui/material'

const QuestionInfo = (props) => {
    return (
        <Box>
            <Box>
                <Typography color="text.primary" gutterBottom variant="h5">Title: {props.title}</Typography>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography color="text.secondary" variant="p">{props.userInfo.username}</Typography>
                <Typography color="text.secondary" variant="p">{props.createdAt}</Typography>
            </Box>
        </Box>
    );
}

export default QuestionInfo;
