import styled from 'styled-components';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Wrapper>
      <StyledLink to="/">
        <Logo>
          <StorefrontIcon fontSize="large" />
          <LogoTitle>E Commerce</LogoTitle>
        </Logo>
      </StyledLink>

      <SearchBar>
        <SearchInput />
        <StyledSearchIcon />
      </SearchBar>
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
          <CartLink to="/cart">
            <NavItemCart>
              <StyledShoppingBasketIcon />

              <CartCount>0</CartCount>
            </NavItemCart>
          </CartLink>
        </NavList>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 25px;
  gap: 10px;
  color: #ff9f00;
`;

const LogoTitle = styled.h2`
  color: white;
`;

const SearchBar = styled.div`
  display: flex;
  // Note: Allows Search bar to grow to fill the space
  flex-grow: 1;
  align-items: center;
`;

const SearchInput = styled.input`
  height: 12px;
  padding: 10px;
  border: none;
  outline: none;
  width: 100%;
`;

const StyledSearchIcon = styled(SearchIcon)`
  padding: 5px;
  // Note: Guarantees height of icon
  height: 22px !important;
  background-color: #ff9f00;
`;

const StyledLink = styled(Link)`
  color: #ff9f00;
  text-decoration: none;
`;

const CartLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
`;

const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 2px;
`;

const NavItemLine1 = styled.span`
  font-size: 10px;
`;

const NavItemLine2 = styled.span`
  font-size: 13px;
  font-weight: bold;
`;

const NavItemCart = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin: 0 20px 0 10px;
`;

const StyledShoppingBasketIcon = styled(ShoppingBasketIcon)``;

const CartCount = styled.span`
  margin: 0 10px;
`;

export default Header;
