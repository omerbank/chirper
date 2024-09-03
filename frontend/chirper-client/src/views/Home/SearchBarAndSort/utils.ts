import { curry } from 'lodash/fp';
import { SetURLSearchParams } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material';
import { SortMethod } from './types';
import { ChangeEvent } from 'react';

export const changeSortBy = curry(
  (setSearchParams: SetURLSearchParams, e: SelectChangeEvent<SortMethod>) => {
    setSearchParams(
      (prevParams) => {
        prevParams.set('sort', e.target.value);
        if (prevParams.get('search') === '') prevParams.delete('search');

        return prevParams;
      },
      { replace: true }
    );
  }
);

export const changeSearchText = curry(
  (
    setSearchParams: SetURLSearchParams,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchParams(
      (prevParams) => {
        if (e.target.value === '') prevParams.delete('search');
        else prevParams.set('search', e.target.value);

        return prevParams;
      },
      { replace: true }
    );
  }
);
