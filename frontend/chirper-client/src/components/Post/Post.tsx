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
import { PostProps } from './types';
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
            sx={{ width: 56, height: 56 }}
          />
        }
        title={`@${post.username}`}
        subheader={formatDate(post.postedAt)}
        titleTypographyProps={{ fontSize: 16, fontWeight: 600 }}
      />
      <Box sx={{ ml: '4px', mt: -2 }}>
        <CardContent>
          <Typography variant="body1">{post.content}</Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <Typography variant="button" sx={{ ml: '-2px !important' }}>
            {post.likesNum}
          </Typography>
        </CardActions>
      </Box>
    </Card>
  );
}
