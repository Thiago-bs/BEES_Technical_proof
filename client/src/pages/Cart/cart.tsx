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
    BeerViewLink,
    BeerAmount
} from "../Card/cardElement";
import { Container, Row, ColumnCustom} from '../Util/grid';
import {GoBack, CartWrapper, CartImage} from './cartElement'
import { connect } from 'react-redux';
import * as UtilStore from '../../store/Util/util';
import Beer from '../../models/Beer'

const definedColumn = {
    devices: {
        mobile: 12,
        tablet: 8,
        desktop: 6,
    }
}


function Cart(state: any) {
    const [beers, setBeers] = useState<Beer[]>([]);
    const beersx = state.state.cartReducer.products;
    console.log(beersx)
    useEffect(() => {
        if(beersx.length > 0) {
            setBeers(beersx)
        }
    }, [beersx]);
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
                                    <ColumnCustom theme={{ column: 1 }}>
                                        <CartImage theme={{ image: { url: beer.image_url } }}></CartImage>
                                    </ColumnCustom>
                                    <ColumnCustom theme={{ column: 8 }}>
                                        <CardBody>
                                            <BeerTitle> {beer.name} </BeerTitle>
                                            <BeerDetail> {beer.detail}</BeerDetail>
                                            <BeerAmount> Amount: {beer.amount} </BeerAmount>
                                            <BeerCost> Price to pay:  </BeerCost>
                                            <BeerPromotion> {beer.promotion} </BeerPromotion>
                                        </CardBody>
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