import React from 'react';
import './TagList.css'
import Tag from '../Tag/Tag';

const TagList = (props) => {
    return (props.tagList.map((tag) => <Tag tag={tag}/> ));
}

export default TagList;

