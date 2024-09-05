import { Dispatch, SetStateAction } from 'react';
import { UseFormReset } from 'react-hook-form';
import { NewPostInput } from './types';

export const handleClose = (
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  reset: UseFormReset<NewPostInput>
) => {
  setIsOpen(false);
  reset({
    postContent: '',
  });
};
