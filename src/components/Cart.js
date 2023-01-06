import styled from 'styled-components';
import banner from '../assets/images/cart-banner.png';
import CartProduct from './CartProduct';

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
      <ProductsArea>
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </ProductsArea>
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

const ProductsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PayArea = styled.div``;

export default Cart;
