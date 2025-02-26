import { Card, CardContent, Typography } from "@mui/material";
import { User } from "../api/api";

interface UserCardProps {
  user: User;
  isSelected: boolean;
  onSelect: (userId: number) => void;
}

const UserCard = ({ user, isSelected, onSelect }: UserCardProps) => {
  return (
    <Card 
      onClick={() => onSelect(user.id)}
      sx={{
        mb: 2,
        cursor: 'pointer',
        bgcolor: isSelected ? 'action.selected' : 'background.paper',
        transition: 'background-color 0.3s',
        '&:hover': {
          bgcolor: 'action.hover',
        }
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>{user.name}</Typography>
        <Typography variant="body2" color="text.secondary">{user.email}</Typography>
        <Typography variant="body2" color="text.secondary">{user.company.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;