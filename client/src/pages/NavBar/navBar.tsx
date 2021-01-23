import React from 'react';
import {
    Nav,
    NavLink,
    Title,
    NavLinkButton,
    TitleButton,
    TitleNotification
} from './navbarElements'
import { Container, Row, ColumnCustom } from '../Util/grid';
import { connect } from 'react-redux';
import * as UtilStore from '../../store/Util/util';

function navBar(state: any) {
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
                        <ColumnCustom theme={{ column: 12 }}>
                            <NavLinkButton to='/cart'>
                                <TitleButton>
                                    CART
                                </TitleButton>
                                <TitleNotification>{state.state.cartReducer.products.length}</TitleNotification>
                            </NavLinkButton>
                        </ColumnCustom>
                    </Row>
                </Container>
            </Nav>
        </div>
    );
}
export default connect(UtilStore.mapStateToProps)(navBar);