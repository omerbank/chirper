import { Dispatch, SetStateAction } from 'react';

export type NewPostModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export type NewPostInput = {
  postContent: string;
};
