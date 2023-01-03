import { useEffect, useState } from 'react';
import styled from 'styled-components';
import banner from '../assets/images/banner.jpg';

const Homepage = () => {
  const [products, setProducts] = useState([{}]);

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
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Banner = styled.img`
  width: 100vw;
  height: 300px;
`;

export default Homepage;
