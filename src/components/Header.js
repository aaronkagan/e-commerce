import styled from 'styled-components';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <StorefrontIcon fontSize="large" />
        <LogoTitle>E Commerce</LogoTitle>
      </Logo>
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
          <NavItemCart>
            <StyledShoppingBasketIcon />
            <CartCount>0</CartCount>
          </NavItemCart>
        </NavList>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 25px;
  gap: 5px;
  color: #ff9f00;
`;

const LogoTitle = styled.h2`
  color: white;
`;

const SearchBar = styled.div`
  display: flex;
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
  height: 22px !important;
  background-color: #ff9f00;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 0 10px;
`;

const NavList = styled.ul``;

const NavItem = styled.li``;

const NavItemLine1 = styled.span`
  font-size: 10px;
`;

const NavItemLine2 = styled.span`
  font-size: 13px;
  font-weight: 800;
`;

const NavItemCart = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-right: 0 50px 0 10px;
`;

const StyledShoppingBasketIcon = styled(ShoppingBasketIcon)``;

const CartCount = styled.span`
  margin: 0 10px;
`;

export default Header;
