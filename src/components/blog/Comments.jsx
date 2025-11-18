import { useState, useEffect } from "react";
import { useParams} from 'react-router';
import { useAuth } from "../login/Auth";

function Comments() {
    const { id } = useParams();
    const { user } = useAuth();

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
            const newComment = {
            id: commentList.length + 1,
            postId: id,
            name: user.username,
            body: comment
        };

        setCommentList(prev => [...prev, newComment]);
        setComment('');

    };

    if (commentList === null) {
        return <p>Loading....</p>
    }

    return (
        <div class="comments">
            <h2>Comments</h2>
            <div>
                {user ? (
                        <><p>Commenting as: {user.username}</p><textarea placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)} /><button onClick={commentSubmit}>Submit Comment</button></>
                    
                ) : (
                    <p>Please login to comment</p>
                )}
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