import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
  background: #1a9ff1;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  width: 100%;
`

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 0.2rem;
  height: 10%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`
export const NavLinkButton = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  margin-top: -30px;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`
export const Title = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: #fff;
    text-align:center;
    margin-top: -20px;
`
export const TitleButton = styled.h1`
    font-size: 0.8em;
    text-align: center;
    width: 100%;
    color: #fff;
    padding: 0.25em 1em;
    border: 2px solid;
    border-radius: 3px;
`
export const TitleNotification = styled.div`
  font-size: 0.8em;
  text-align: center;
  width: auto;
  color: #fff;
  background-color: #e9093a;
  padding: 0.25em 1em;
  border: 2px solid;
  border: 2px solid;
  border-radius: 3px;
`