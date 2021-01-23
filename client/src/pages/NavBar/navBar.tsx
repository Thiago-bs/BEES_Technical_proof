import React from 'react';
import {
    Nav,
    NavLink,
    Title,
    NavLinkButton,
    TitleButton,
} from './navbarElements'

import {Container, Row, ColumnCustom } from '../Util/grid';

const definedColumn = {
    devices: {
        mobile: 12,
        tablet: 6,
        desktop: 4,
    }
}

function navBar() {
    return (
        <div>
            <Nav>
                <Container>
                    <Row>
                        <ColumnCustom theme={{ column: 12 }}>
                            <NavLink to='/'>
                                <Title>ANHEUSER-BUSCH INBEV</Title>
                            </NavLink>
                        </ColumnCustom>
                        <ColumnCustom theme={{ column: 6 }}>
                            <NavLinkButton to='/add-beer'>
                                <TitleButton>ADD PRODUCT</TitleButton>
                            </NavLinkButton>
                        </ColumnCustom>
                        <ColumnCustom theme={{ column: 6}}>
                            <NavLinkButton to='/'>
                                <TitleButton>CART</TitleButton>
                            </NavLinkButton>
                        </ColumnCustom>
                    </Row>
                </Container>
            </Nav>
        </div>
    );
}

export default navBar;