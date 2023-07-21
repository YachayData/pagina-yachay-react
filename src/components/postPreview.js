import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';


function PostPreview(props) {
    const { post } = props;
    return (
        <div className="PostPreview">
            <Card style={{ maxHeight: 240}}>
                <CardActionArea>
                    <CardContent style={{ display: "flex"}}>
                        <CardMedia 
                            sx={{ minWidth: 400, minHeight: 240}}
                            image={post.image}
                        />

                        <Box style={{ width: 400, padding: 20 }}>
                            <Typography variant="h5">
                                {post.title}
                            </Typography>

                            <Typography variante="caption">
                                {post.summary}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default PostPreview;