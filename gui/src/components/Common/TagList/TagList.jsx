import React from 'react';
import './TagList.css'
import Tag from '../Tag/Tag';

const TagList = (props) => {
    return (
        <div id='tag-list'>
            {props.tagList.map((tag) => <Tag key={tag} tag={tag}/> )}
        </div>
    );
}

export default TagList;

