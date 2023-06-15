import React from 'react';
import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import TagList from '../Common/TagList/TagList'
import "./QuestionCard.css"
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';

const QuestionInfo = (props) => {
    return (
        <Box sx={{my:"4"}}>
            <Card variant="outlined">
                <CardContent>
                    <Box>
                        <Typography style={{ fontSize: 20}}>
                            {props.questionInfo.title}
                        </Typography>
                        <TagList tagList={props.questionInfo.tagList} />
                    </Box>
                </CardContent>
                <CardActions>
                    <Button variant="contained" sx={{ background: "red" }}>View Question</Button>
                </CardActions>
            </Card>

            {/* <div class="card">
                <h5 class="card-header">Featured</h5>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
        </Box>
    );
}

export default QuestionInfo;
