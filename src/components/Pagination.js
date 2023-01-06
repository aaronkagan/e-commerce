import styled from 'styled-components';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Nav>
      <Ul>
        {pageNumbers.map((number) => (
          <Li key={number}>
            <a
              onClick={() => paginate(number)}
              href="#!"
            >
              {number}
            </a>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

const Nav = styled.nav`
  padding-bottom: 3vh;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const Li = styled.li`
  a {
    border: 1px solid white;
    padding: 10px 15px;
    text-decoration: none;
  }
`;

export default Pagination;
