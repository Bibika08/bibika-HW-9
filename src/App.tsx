import { useEffect, useState } from "react";
import { 
  Container, 
  Typography, 
  Grid, 
  useMediaQuery,
  useTheme
} from "@mui/material";
import { User, Post, fetchUsers, fetchUserPosts } from "./api/api";
import UserCard from "./components/UserCard";
import PostList from "./components/PostList";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Ошибка загрузки пользователей", error);
      }
    }
    loadUsers();
  }, []);

  async function handleSelectUser(userId: number) {
    try {
      const data = await fetchUserPosts(userId);
      setPosts(data);
      setSelectedUserId(userId);
    } catch (error) {
      console.error("Ошибка загрузки постов", error);
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Список пользователей
      </Typography>
      
      <Grid container spacing={3} direction={isMobile ? 'column' : 'row'}>
        <Grid item xs={12} md={6}>
          {users.map((user) => (
            <UserCard 
              key={user.id}
              user={user}
              isSelected={selectedUserId === user.id}
              onSelect={handleSelectUser}
            />
          ))}
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h2" align="center" gutterBottom>
            Посты пользователя
          </Typography>
          <PostList posts={posts} />
        </Grid>
      </Grid>
    </Container>
  );
}