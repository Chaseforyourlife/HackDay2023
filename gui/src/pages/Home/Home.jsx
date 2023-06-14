import React from 'react';
import SortQuestionsBar from '../../components/SortQuestionsBar/SortQuestionsBar';
import Post from '../Post/Post';
import NavBar from '../../components/NavBar/NavBar';
import "./styles.css"



export default function Home(){
    return (
        <div id='home-div'>
            <NavBar/>
            <SortQuestionsBar/>
            <Post/>
        </div>
    );
}