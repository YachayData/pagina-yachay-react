import '../styles/home.css';

import { useParams } from 'react-router-dom';
const {postArray} = require('../db/data'); 

function Post () {
    const { id } = useParams();
    const post = postArray[id]

    return (
        <div className="Post">

            <h1>Post.id</h1>

            <h2>{post.title}</h2>
            <img src={post.image}></img>
            <p>{post.summary}</p>

        </div>
    );
}

export default Post;