import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const SortBar = ({ setSortOption }) => {
  return (
    <FormControl>
      <InputLabel>Sort By</InputLabel>
      <Select onChange={(e) => setSortOption(e.target.value)}>
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="discount">Discount</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortBar;
