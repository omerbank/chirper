import { FC } from 'react';
import { NewPostInput, NewPostModalProps } from './types';
import { useStyles } from './styles';
import { useForm } from 'react-hook-form';
import { useNewPost } from '../../../../services/posts/hooks/useNewPost';
import {
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { handleClose } from './utils';

export const NewPostModal: FC<NewPostModalProps> = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPostInput>({ mode: 'onSubmit' });
  const { mutate, isPending } = useNewPost(setIsOpen, reset);

  return !isPending ? (
    <Dialog
      open={isOpen}
      onClose={() => handleClose(setIsOpen, reset)}
      fullWidth
    >
      <DialogTitle>Create a new chirp</DialogTitle>
      <DialogContent>
        <TextField
          {...register('postContent', {
            required: 'Post must have content',
            maxLength: {
              value: 280,
              message: 'Maximum length of post content is 280 characters',
            },
          })}
          autoFocus
          margin="dense"
          placeholder="Write something here..."
          error={!!errors.postContent}
          helperText={errors.postContent?.message}
          rows={8}
          multiline
          fullWidth
        />
      </DialogContent>
      <DialogActions className={classes.buttons}>
        <Button onClick={() => handleClose(setIsOpen, reset)}>Cancel</Button>
        <Button
          variant="contained"
          className={classes.postBtn}
          onClick={handleSubmit((data) => mutate(data))}
          disableElevation
        >
          Post
        </Button>
      </DialogActions>
    </Dialog>
  ) : (
    <Backdrop open={true} className={classes.loadingBackdrop}>
      <CircularProgress className={classes.loadingCircle} />
    </Backdrop>
  );
};
