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
        <ProductsArea>
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </ProductsArea>
      </Basket>

      <PayArea>
        <Subtotal>
          Subtotal (0 items): <Amount>$0</Amount>
        </Subtotal>

        <Label>
          <input type="checkbox" />
          This order contains a gift
        </Label>
        <CheckoutButton>Proceed to Checkout</CheckoutButton>
      </PayArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2%;
  display: flex;
  align-items: flex-start;
  gap: 2%;
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

const PayArea = styled.div`
  background: #e6e7ff;
  width: 30%;
  padding: 1.5%;
`;

const Subtotal = styled.p`
  margin: 0 0 0.5em 0;
`;

const Amount = styled.span`
  font-weight: 900;
`;

const Label = styled.label`
  display: flex;
  gap: 1%;
`;

const CheckoutButton = styled.button`
  background: #ff9f00;
  border: 0;
  width: 100%;
  padding: 0.5em;
  margin-top: 5%;
`;

export default Cart;
