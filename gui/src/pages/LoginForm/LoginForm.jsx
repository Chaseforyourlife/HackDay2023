import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import {Box, Card, CardContent, CardActions, Button, TextField} from '@mui/material';

export default function LoginForm(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleLogin = async () => {
        const url = "/api/main/login"
        const body = {
            email: email,
            password: password
        }

        try {

            const res = await( await(fetch(url, {method: "POST", headers:{"Content-Type": "application/json"}, body: JSON.stringify(body)}))).json()
        } catch (e) {
            console.error(e)
        }
        const res = { status: 'success'}
        
        if (res.status === 'success') {
            console.log('login from form');
            props.loginCallback();
            navigate("/");
        }
        else
            throw new Error("bad login")
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <Card>
                <CardContent sx={{display: "flex", justifyContent: "space-around"}}>
                    <TextField variant='standard' label="Email" onChange={(v)=>setEmail(v.target.value)}></TextField>
                    <TextField variant='standard' label="Password" onChange={(v)=>setPassword(v.target.value)}></TextField>
                    <Button variant="contained" sx={{background: "red !important"}} onClick={handleLogin}>Login</Button>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </Box>
    );
}
