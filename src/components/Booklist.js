// Booklist.jsx
import React, { useState, useEffect } from "react";

const Booklist = (props) => {
    const [bookData, setBookData] = useState(null);
    const result = props.getData?.(props.language);

    useEffect(() => {
        const result = props
            .getData?.(props.language)
            .then((response) => setBookData(response));
    }, [props])

    return (
        <div>
            <ul>
            {
                bookData === null ? (
                    <p>now loading...</p>
                ) : (
                    bookData.data.items.map((x, index) => (
                        <li key={index}>
                            <h2>{x.volumeInfo.title}</h2>
                            <p><img src = {x.volumeInfo.imageLinks ? x.volumeInfo.imageLinks.smallThumbnail:""}></img></p>
                            <p>{x.volumeInfo.authors}</p>
                            <p>{x.volumeInfo.description}</p>
                            <p>{x.volumeInfo.publishedDate}</p>
                            <a href = {x.volumeInfo.canonicalVolumeLink}>{x.volumeInfo.canonicalVolumeLink}</a>
                        
                        </li>
                    ))
                )
            }
            </ul>
        </div>
    );
};
export default Booklist;