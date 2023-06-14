import React from 'react';
import SortQuestionsBar from '../../components/SortQuestionsBar/SortQuestionsBar';
import Post from '../Post/Post';

export default function Home(){
    return (
        <div id='home-div'>
            <SortQuestionsBar/>
            <Post/>
        </div>
    );
}