import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import './error.css';

export default function Error() {
  return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="filled" severity="error">
          404 Pagina não encontrada
        </Alert>
        <div className="not-found">
          <Link to="/">Ver todos os filmes</Link>
        </div>
      </Stack>
  );
}
