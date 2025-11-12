import React, { useState, useRef, useEffect } from "react";
import { data, useParams} from 'react-router';

function Comments() {
    const { id } = useParams();

    const [ commentList, setCommentList ] = useState([]);
    const [ name, setName ] = useState('');
    const [ comment, setComment ] = useState('');

    const focusOnCommentBox = () => {
    };

    useEffect(() => {
        focusOnCommentBox();
    }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(data => setCommentList(data))
            .catch(error => {
                console.error('Error fetching comments:', error);
                setCommentList([]);
            });
    }, 
[id]);

    const commentSubmit = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                name: name,
                body: comment,
                postId: id,
            }),
        })
            .then(response => response.json())
            .then(data => {
                setCommentList(prev => [...prev, data]);
                setName('');
                setComment('');
            })
            .catch(error => console.error('Error posting comment:', error));

    };

    if (commentList === null) {
        return <p>Loading....</p>
    }

    return (
        <div class="comments">
            <h2>Comments</h2>
            <div>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <textarea placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)} />
                <button onClick={commentSubmit}>Submit Comment</button>
            </div>
            {commentList.length === 0 ? (
                <p>No comments yet. Be the first to comment.</p>
            ) : (
                <ul>
                    {commentList.map((c) => (
                        <li key={c.id}>
                            <strong>{c.name}:</strong> {c.body}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Comments;