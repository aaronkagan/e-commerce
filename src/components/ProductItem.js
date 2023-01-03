import styled from 'styled-components';

const ProductItem = ({ item }) => {
  return (
    <Wrapper>
      <img
        src={item.image}
        alt={item.title}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ProductItem;
