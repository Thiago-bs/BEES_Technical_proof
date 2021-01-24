import React, {  useState, useEffect }  from 'react';

import {
    CardWrapperCustom,
    CardHeader,
    CardBody,
    BeerTitle,
    CardFieldset,
    CardFooter,
    BeerDetail,
    BeerCost,
    BeerPromotion,
    BeerAmount,
    Button,
} from "../Card/cardElement";
import { Container, Row, ColumnCustom} from '../Util/grid';
import {GoBack, CartWrapper, CartImage, TrashCustom} from './cartElement'
import { connect, useDispatch } from 'react-redux';
import * as UtilStore from '../../store/Util/util';
import Beer from '../../models/Beer'
import { Dispatch } from "redux";
import * as CartActions from '../../store/actions/cart';

const definedColumn = {
    devices: {
        mobile: 12,
        tablet: 8,
        desktop: 6,
    }
}

function Cart(state: any) {
    let [beers, setBeers] = useState<Beer[]>([]);
    const beersx = state.state.cartReducer.products;
    const cart = state.state.cartReducer;
    const dispatch: Dispatch<any> = useDispatch();
    useEffect(() => {
        if(beersx.length > 0) {
            setBeers(beersx)
        }
    }, [beersx]);

    function removeItem(beerToRemove: Beer, index: number){
        dispatch(CartActions.deleteItemOnCart(cart, beerToRemove, index));
        let changedBeers = state.state.cartReducer.products;
        setBeers(changedBeers)
    }
    return (
        <div>
            <CardWrapperCustom theme={definedColumn}>
                <CardHeader>
                    <BeerTitle>CART</BeerTitle>
                </CardHeader>
                <CardBody>
                {beers.map((beer, index) => {
                        return (
                            <CartWrapper key={index}>
                                <Container>
                                    <Row>
                                    <ColumnCustom theme={{ column: 2 }}>
                                        <CartImage theme={{ image: { url: beer.image_url } }}></CartImage>
                                    </ColumnCustom>
                                    <ColumnCustom theme={{ column: 8 }}>
                                        <CardBody>
                                            <BeerTitle> {beer.name} </BeerTitle>
                                            <BeerDetail> {beer.detail}</BeerDetail>
                                            <BeerAmount> Amount: {beer.amount} </BeerAmount>
                                            <BeerCost> Price to pay:  RD$ {(beer.amount * beer.cost).toFixed(2)}</BeerCost>
                                            <BeerPromotion> {beer.promotion} </BeerPromotion>
                                        </CardBody>
                                    </ColumnCustom>
                                    <ColumnCustom theme={{ column: 2 }}>
                                        <Button onClick={() => removeItem(beer, index)} >
                                            <TrashCustom theme={{ color: '#e9093a' }} >
                                            </TrashCustom>
                                        </Button>
                                    </ColumnCustom>
                                    </Row>
                                </Container>
                            </CartWrapper>
                        )
                    }
                )}
                </CardBody>
                 <CardFooter>
                    <CardFieldset>
                        <GoBack to="/">BACK TO HOME</GoBack>
                    </CardFieldset>
                  </CardFooter>
            </CardWrapperCustom>
        </div>
    );
}

export default connect(UtilStore.mapStateToProps)(Cart);