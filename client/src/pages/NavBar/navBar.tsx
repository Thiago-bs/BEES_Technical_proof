import React from 'react';
import {
    Nav,
    NavLink,
    Title
  } from './navbarElements'

function navBar() {
    return (
        <div>
            <Nav>
                <NavLink to='/'>
                    <Title>ANHEUSER-BUSCH INBEV</Title>
                </NavLink>
            </Nav>
        </div>
    );
}

export default navBar;