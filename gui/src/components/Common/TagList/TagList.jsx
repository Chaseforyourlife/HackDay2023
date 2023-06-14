import React from 'react';
import './TagList.css'
import Tag from '../Tag/Tag';

const TagList = ({tags}) => {
    return (tags.map((tag) => 
        <Tag tagInfo={tag}/>
    ));
}

export default TagList;

