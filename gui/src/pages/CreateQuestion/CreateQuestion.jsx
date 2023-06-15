import { React, useState } from 'react';
import { Box, Card, CardContent, CardActions, TextField, Typography, Button} from '@mui/material';

const CreateQuestion = () => {
    
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [tags, setTags] = useState();


    const handleSubmit = async () => {
        const url = "http://localhost:5000/add_post"
        const body = {
            title: title,
            content: content,
            tags: tags
        }

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
         }).catch((e)=> {
            console.error(e);
         }).then((res) => {
            if (res.status != "success"){
                throw new Error("something bad: " + res.status)
            }

            //handle response
         })
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <Card>
                <CardContent>
                    <Typography variant="h6">Ask a question!</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <TextField id="title-input" onChange={(v)=>setTitle(v.target.value)} label="Title.." variant="filled" sx={{my:1}} />
                        <TextField id="content-input" onChange={(v)=>setContent(v.target.value)} label="Question..." variant="outlined" multiline rows={10} sx={{my:1}}/>
                        <TextField id="tags-input" onChange={(v)=>setTags(v.target.value)} label="Tags..." variant="standard" sx={{my:1}}/>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
                        <Button 
                        variant="contained"
                        sx={{background: "red"}}
                        onClick={handleSubmit}
                        >Submit</Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
}

export default CreateQuestion;
