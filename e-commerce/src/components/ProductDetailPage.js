import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    // Fetch product details based on id
    // Example: setProduct(fetchProductById(id));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          alt={product.name}
          height="140"
          image="placeholder-image-url"
        />
        <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body2" color="textSecondary">{product.description}</Typography>
          <Typography variant="h6">Price: ${product.price}</Typography>
          <Typography variant="body2">Rating: {product.rating}</Typography>
          <Typography variant="body2">Discount: {product.discount}%</Typography>
          <Typography variant="body2">Availability: {product.availability}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetailPage;
