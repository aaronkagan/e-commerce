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
        <SearchInput>
          <SearchIcon />
        </SearchInput>
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
          <NavItem>
            <ShoppingBasketIcon />
            <NavItemLine2>0</NavItemLine2>
          </NavItem>
        </NavList>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Logo = styled.div``;

const LogoTitle = styled.h2``;

const SearchBar = styled.div``;

const SearchInput = styled.input``;

const Nav = styled.nav``;

const NavList = styled.ul``;

const NavItem = styled.li``;

const NavItemLine1 = styled.span``;

const NavItemLine2 = styled.span``;

export default Header;
