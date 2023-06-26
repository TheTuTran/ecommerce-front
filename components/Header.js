import styled from "styled-components";
import Center from "./Center";
import Link from "next/link";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;
const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Ecommerce</Logo>
          <StyledNav>
            <StyledNav>
              <NavLink href={"/"}>Home</NavLink>
              <NavLink href={"/products"}>All Products</NavLink>
              <NavLink href={"/categories"}>Categories</NavLink>
              <NavLink href={"/account"}>Account</NavLink>
              <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
            </StyledNav>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
