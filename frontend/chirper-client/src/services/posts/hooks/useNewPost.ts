import { Dispatch, SetStateAction } from 'react';
import { UseFormReset } from 'react-hook-form';
import { useUser } from '../../contexts/UserContext';
import { useMutation } from '@tanstack/react-query';
import { NewPostInput } from '../../../components/Navbar/LoggedIn/NewPostModal/types';
import { addPost } from '../../../api';
import { handleClose } from '../../../components/Navbar/LoggedIn/NewPostModal/utils';
import { queryClient } from '../../../query-client';

export const useNewPost = (
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  reset: UseFormReset<NewPostInput>
) => {
  const { user } = useUser();

  return useMutation({
    mutationFn: (postContent: NewPostInput) => addPost(user!.id, postContent),
    onSuccess: () => {
      handleClose(setIsOpen, reset);
      queryClient.refetchQueries({ queryKey: ['posts'] });
    },
  });
};
