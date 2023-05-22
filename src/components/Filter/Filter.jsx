import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search contacts"
        inputProps={{ 'aria-label': 'search contacts' }}
        onChange={handleChangeFilter}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
