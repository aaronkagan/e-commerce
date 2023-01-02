import styled from 'styled-components';
const Header = () => {
  return (
    <Wrapper>
      <Logo></Logo>
      <SearchBar></SearchBar>
      <Nav>
        <NavList>
          <NavItem>
            <NavItemLine1>Hello Guest</NavItemLine1>
            <NavItemLine2>Sign In</NavItemLine2>
          </NavItem>
          <NavItem>
            <NavItemLine1>Your</NavItemLine1>
            <NavItemLine2>Shop</NavItemLine2>
          </NavItem>
          <NavItem>
            <NavItemLine1>Cart</NavItemLine1>
            <NavItemLine2>0</NavItemLine2>
          </NavItem>
        </NavList>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Logo = styled.div``;

const SearchBar = styled.div``;

const Nav = styled.nav``;

const NavList = styled.ul``;

const NavItem = styled.li``;

const NavItemLine1 = styled.span``;

const NavItemLine2 = styled.span``;

export default Header;
