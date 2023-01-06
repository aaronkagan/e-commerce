import styled from 'styled-components';
import banner from '../assets/images/cart-banner.png';

const Cart = () => {
  return (
    <Wrapper>
      <Basket>
        <Banner
          src={banner}
          alt="Boxing Day Sale"
        />
        <Title>Your Cart</Title>
      </Basket>
      <ProductsArea></ProductsArea>
      <PayArea></PayArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2%;
`;

const Basket = styled.div`
  width: 70%;
`;

const Banner = styled.img`
  width: 100%;
`;

const Title = styled.h2``;

const ProductsArea = styled.div``;

const PayArea = styled.div``;

export default Cart;
