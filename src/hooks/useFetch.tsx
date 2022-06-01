import { Product } from '../types/product.type';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetch_product = async () => {
      const { data } = await axios.get('https://fe-assignment.vaimo.net/');
      setProduct(data.product);
      setLoading(false);
    };

    fetch_product();
  }, []);

  return {
    product,
    loading,
  };
};

export default useFetch;
