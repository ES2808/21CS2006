import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import SortBar from './SortBar';
import { Container, Grid, Pagination } from '@mui/material';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ company: '', category: '', minPrice: 0, maxPrice: 10000 });
  const [sortOption, setSortOption] = useState('price');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [filters, sortOption, page]);

  const fetchProducts = async () => {
    const data = await getProducts(filters.company, filters.category, 10, filters.minPrice, filters.maxPrice);
    setProducts(data);
  };

  return (
    <Container>
      <FilterBar setFilters={setFilters} />
      <SortBar setSortOption={setSortOption} />
      <Grid container spacing={2}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Pagination count={10} page={page} onChange={(e, value) => setPage(value)} />
    </Container>
  );
};

export default ProductListPage;
