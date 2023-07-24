import PostPreview from '../components/postPreview';
import '../styles/home.css';
import { Box } from '@mui/material';

const {postArray} = require('../db/data');

function Home () {

    return (
        <div className="Home">
            <h1>Home Page</h1>

            <Box style={{ display: "flex", "justifyContent": "center"}}>
                <ul style={{ maxWidth: 800}}>
                    {postArray.map(post => (
                        <PostPreview key={post.id} post={post}/>
                    ))}
                </ul>
            </Box>
        </div>
    );
}

export default Home;