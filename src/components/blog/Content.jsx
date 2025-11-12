import React from "react";

function Content({title, content, author, date}) {
    return (
        <main>
            <h1>{title}</h1>
            <p>{content}</p>
            <p>
                <strong>Author:</strong> {author}
            </p>
            <p>
                <strong>Date:</strong> {date}
            </p>
        </main>
    )
}

export default Content;