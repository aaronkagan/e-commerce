import styled from 'styled-components';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <StorefrontIcon />
      </Logo>
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
            <ShoppingBasketIcon fontSize="large" />
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
