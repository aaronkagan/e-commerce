import styled from 'styled-components';

const ProductItem = ({ item, row }) => {
  return (
    item && (
      <Wrapper row={row}>
        <Title>{item.title}</Title>
        <Price>${item.price}</Price>
        <Rating>⭐️⭐️</Rating>
        <Img src={item.image} />
        <Button>Add Item</Button>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const Rating = styled.div`
  display: flex;
`;

const Title = styled.p``;

const Price = styled.p``;

const Img = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin: 20px 0 0 15px;
`;

const Button = styled.button`
  margin: 20px auto;
  border: none;
  background-color: #ff9f00;
  padding: 5px 10px;

  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export default ProductItem;
