import { Card, CardContent, Typography, Box } from "@mui/material";
import { Post } from "../api/api";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <Box>
      {posts.map((post) => (
        <Card key={post.id} sx={{ mb: 1 }}>
          <CardContent>
            <Typography variant="body1">{post.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default PostList;