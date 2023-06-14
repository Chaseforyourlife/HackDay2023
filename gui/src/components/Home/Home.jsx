import React from 'react';

export default function Home(){
    return (
        <div id='home-div'>
            <SortQuestionsBar
                <CustomButton
                    <div>
                        <button></button>
                    </div>
                /> x (Multiple)
            />
            <QuestionList
                <Question
                    <QuestionStats
                        <SmallText/> x 3
                    />
                    <QuestionInfo
                        <QuestionTitle/>
                        <Tag/> x (Variable)
                        <UserInfo/>
                    />
                /> x (Variable)
            />
        </div>
    );
}