import React from 'react';

const PostItem = ({ count, title ,price }) => {

    return (
        <>
        <div >
            <div>{title}</div>
            <div>{price}</div>
            <div>{count}</div>
        </div>


        </>
    );
};

export default PostItem;
