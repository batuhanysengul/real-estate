import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &:hover{
    color: #cd853f;
    transition: 0.3s;
    transform: translateY(5px);
  }
`;

export const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

export const MenuBars = styled(FaBars)`
  visibility: hidden;

  @media screen and (max-width: 768px) {
    visibility: visible;
    height: 25px;
    width: 25px;
    position: absolute;
    cursor: pointer;
    top: 15px;
    right: 40px;
    color: white;
    display: flex;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  margin-bottom: 3px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
