import React from 'react';
import { Box, Card, CardContent, CardActions, TextField, Typography, Button} from '@mui/material';

const CreateQuestion = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <Card>
                <CardContent>
                    <Typography variant="h6">Ask a question!</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <TextField id="title-input" label="Title.." variant="filled" sx={{my:1}} />
                        <TextField id="content-input" label="Question..." variant="outlined" multiline rows={10} sx={{my:1}}/>
                        <TextField id="tags-input" label="Tags..." variant="standard" sx={{my:1}}/>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
                        <Button variant="contained" sx={{background: "red"}}>Submit</Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
}

export default CreateQuestion;
