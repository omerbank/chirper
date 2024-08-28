import { isRouteErrorResponse } from 'react-router-dom';

export const getErrorMessage = (error: unknown) => {
  let errorMessage;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  return errorMessage;
};
