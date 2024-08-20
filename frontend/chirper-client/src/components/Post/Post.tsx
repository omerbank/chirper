import { PostProps } from './types';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import { formatDate } from './utils';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Post({ post }: PostProps) {
  return (
    <Card variant="outlined" sx={{ width: 540 }}>
      <CardHeader
        avatar={
          <Avatar
            src={post.avatarUrl}
            alt={`${post.username}'s Avatar`}
            sx={{ width: 52, height: 52 }}
          />
        }
        title={`@${post.username}`}
        subheader={formatDate(post.postedAt)}
        titleTypographyProps={{ fontSize: 16, fontWeight: 600 }}
        sx={{ pb: 0 }}
      />
      <Box sx={{ ml: '4px' }}>
        <CardContent>
          <Typography variant="body1">{post.content}</Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={(e) => e.preventDefault()}>
            <FavoriteIcon />
          </IconButton>
          <Typography variant="button" sx={{ ml: '-2px !important' }}>
            {post.likesNum > 0 && post.likesNum}
          </Typography>
        </CardActions>
      </Box>
    </Card>
  );
}
