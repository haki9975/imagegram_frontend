import React, { useEffect } from 'react';


 function Comments(props) {

    return (
        <div>
            <h1>Comments</h1>
            <p>Username: {props.username}</p>
            <p>Comment: {props.body}</p>
            <p>Date: {props.date}</p>
        </div>
    )
}

export default Comments;
