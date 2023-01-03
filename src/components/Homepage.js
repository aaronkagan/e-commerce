import { width } from '@mui/system';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import banner from '../assets/images/banner.jpeg';
import ProductItem from './ProductItem';

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=7')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <Banner
        src={banner}
        alt="banner"
      />
      <ProductsContainer>
        {products.length > 0 ? (
          <>
            <Row1>
              <ProductItem
                row={1}
                item={products[0]}
              />
              <ProductItem
                row={1}
                item={products[1]}
              />
            </Row1>
            <Row2>
              <ProductItem
                row={2}
                item={products[2]}
              />
              <ProductItem
                row={2}
                item={products[3]}
              />
              <ProductItem
                row={2}
                item={products[4]}
              />
            </Row2>
            <Row3>
              <ProductItem
                row={3}
                item={products[5]}
              />
              <ProductItem
                row={3}
                item={products[6]}
              />
            </Row3>
          </>
        ) : (
          <Loading>Loading</Loading>
        )}
      </ProductsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #0082ec7d;
`;

const Banner = styled.img`
  width: 100%;
  height: 400px;
  z-index: -1;
  margin-bottom: -50px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 3vh;
`;

const Row1 = styled.div`
  display: flex;
  gap: 20px;
  width: 95%;
`;

const Row2 = styled.div`
  display: flex;
  gap: 20px;
  width: 95%;
`;

const Row3 = styled.div`
  display: flex;
  gap: 20px;
  width: 95%;
`;

const Loading = styled.h3`
  height: 100vh;
`;

export default Homepage;
