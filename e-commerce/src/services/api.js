import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

export const getProducts = async (company, category, top, minPrice, maxPrice) => {
  const url = `${BASE_URL}/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
  const response = await axios.get(url);
  return response.data;
};
