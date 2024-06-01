import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Card>
    <CardActionArea component={Link} to={`/product/${product.id}`}>
      <CardMedia
        component="img"
        alt={product.name}
        height="140"
        image="placeholder-image-url"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          ${product.price}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default ProductCard;
