import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export function ButtonAdd() {
  return (
    <Button
      variant="outlined"
      sx={{ marginBottom: 2, marginTop: 2 }}
      startIcon={<AddIcon />}
      onClick={() => {
        console.log('add contact');
      }}
    >
      Add contact
    </Button>
  );
}
