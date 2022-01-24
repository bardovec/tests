import React from 'react';

const Twitter = ({usernama, children}) => {
    return (
        <div>
            <div> Yours name: {username}</div>
            {children}
        </div>
    );
};

export default Twitter;
