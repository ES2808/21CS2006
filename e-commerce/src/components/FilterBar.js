import React from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const FilterBar = ({ setFilters }) => {
  const [company, setCompany] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(10000);

  const handleApplyFilters = () => {
    setFilters({ company, category, minPrice, maxPrice });
  };

  return (
    <div>
      <FormControl>
        <InputLabel>Company</InputLabel>
        <Select value={company} onChange={(e) => setCompany(e.target.value)}>
          <MenuItem value="AMZ">Amazon</MenuItem>
          <MenuItem value="FLP">Flipkart</MenuItem>
          {/* Add other companies */}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value="Laptop">Laptop</MenuItem>
          {/* Add other categories */}
        </Select>
      </FormControl>
      <TextField
        label="Min Price"
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <TextField
        label="Max Price"
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleApplyFilters}>
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterBar;
