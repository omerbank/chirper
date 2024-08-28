import { useRouteError } from 'react-router-dom';
import { getErrorMessage } from './utils';
import { Alert, AlertTitle, Grid } from '@mui/material';

export const ErrorPage = () => {
  const error = useRouteError();
  const errorMessage = getErrorMessage(error);

  return (
    <Grid container justifyContent="center">
      <Alert severity="error">
        <AlertTitle>Oops!</AlertTitle>
        Sorry, an unexpected error has occured:
        <br />
        <i>{errorMessage}</i>
      </Alert>
    </Grid>
  );
};
