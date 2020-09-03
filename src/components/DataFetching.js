import React, { useState, useEffect } from 'react'
import axios from 'axios';

function DataFetching() {
    // const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});


    const [id, setId] = useState(1);


    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res);
    //             setPosts(res.data);
    //         }).catch(err => {
    //             console.log(err);
    //         });
    // }, [])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                setPost(res.data);
            }).catch(err => {
                console.log(err);
            });
    }, [id])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />

            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}


        </div>
    )
}
//https://jsonplaceholder.typicode.com/posts
export default DataFetching
