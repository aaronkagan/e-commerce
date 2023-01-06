import { width } from '@mui/system';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import banner from '../assets/images/banner.jpeg';
import ProductItem from './ProductItem';

import Pagination from './Pagination';

const Homepage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  // For Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Wrapper>
      <Banner
        src={banner}
        alt="banner"
      />

      <ProductsContainer>
        {currentItems.length > 0 ? (
          <>
            <Row1>
              <ProductItem
                row={1}
                item={currentItems[0]}
              />
              <ProductItem
                row={1}
                item={currentItems[1]}
              />
            </Row1>
            <Row2>
              <ProductItem
                row={2}
                item={currentItems[2]}
              />
              <ProductItem
                row={2}
                item={currentItems[3]}
              />
              <ProductItem
                row={2}
                item={currentItems[4]}
              />
            </Row2>
            <Row3>
              <ProductItem
                row={3}
                item={currentItems[5]}
              />
              <ProductItem
                row={3}
                item={currentItems[6]}
              />
            </Row3>
          </>
        ) : (
          <Loading>Loading</Loading>
        )}
      </ProductsContainer>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        paginate={paginate}
      />
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
  padding-bottom: 1.5vh;
`;

const Row1 = styled.div`
  display: flex;
  gap: 20px;
  width: 95%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Row2 = styled.div`
  display: flex;
  gap: 20px;
  width: 95%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Row3 = styled.div`
  display: flex;
  gap: 20px;
  width: 95%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Loading = styled.h3`
  height: 100vh;
`;

export default Homepage;
