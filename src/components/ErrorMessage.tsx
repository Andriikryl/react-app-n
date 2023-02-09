import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface ErrorMessageProps {
  error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert severity="error">{ error }</Alert>
  </Stack>
  )
}