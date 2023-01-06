import styled from 'styled-components';
const CartProduct = () => {
  return (
    <Wrapper>
      <ProductImage
        src="https://via.placeholder.com/150"
        alt="placeholder"
      />
      <Details>
        <Title>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, voluptatem.</Title>
        <Price>$19.00</Price>
        <Rating>⭐️⭐️⭐️</Rating>
        <Button>Remove From Cart</Button>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const ProductImage = styled.img``;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.p`
  margin: 0;
`;

const Price = styled.p`
  margin: 0;
`;

const Rating = styled.div`
  margin: 0;
`;

const Button = styled.button`
  width: fit-content;
  border: none;
  background: #ff9f00;
  padding: 0.3em;
`;

export default CartProduct;
