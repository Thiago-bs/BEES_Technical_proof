import React, { useEffect, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import api from '../../services/api';
import { connect, useDispatch } from 'react-redux';
import { Container, Row, Column, ColumnCustom } from '../Util/grid';
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    BeerTitle,
    BeerDetail,
    BeerCost,
    BeerPromotion,
    MinusCircleCustom,
    CardInput,
    CardFooter,
    CardButton,
    PlusCircleCustom,
    BeerViewLink,
    Button
} from "./cardElement";
import Beer from '../../models/Beer'
import * as CartActions from '../../store/actions/cart';
import { Dispatch } from "redux";
import * as UtilStore from '../../store/Util/util';

const definedColumn = {
    devices: {
        mobile: 12,
        tablet: 6,
        desktop: 4,
    }
}

function Card(state: any) {

    const [beersNotSorted, setBeers] = useState<Beer[]>([]);
    let beers = beersNotSorted.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1)

    const cart = state.state.cartReducer;
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        api.get('beers').then(response => {
            setBeers(response.data);
        });
    }, []);

    function amoundHandleClick(isAdd: boolean, beer: Beer) {
        let value = 0;
        if (!isAdd && beer.amount !== 0) {
            value = -1;
        }
        if (isAdd) {
            value = 1;
        }
        let changedBeers = beers.map(element => {
            if (element.id === beer.id) {
                element.amount = element.amount + value;
            }
            return element;
        })
        setBeers(changedBeers);
    }

    function addToCart(beerToAdd: Beer){
        if(beerToAdd.amount === 0) {
            alert("TO ADD TO THE CART YOU NEED TO ADD AT LEAST ONE!");
            return
        }
        dispatch(CartActions.changeCart(cart, beerToAdd, beerToAdd.amount));
        let changedBeers = beers.map(element => {
            if (element.id === beerToAdd.id) {
                element.amount = 0;
            }
            return element;
        })
        setBeers(changedBeers);
        alert("BEER ADDED TO CART");
    }
    return (
        <div>
            <Container>
                <Row>
                    {beers.map(beer => {
                        return (
                            <Column theme={definedColumn} key={beer.id}>
                                <CardWrapper>
                                    <CardHeader>
                                        <CardHeading theme={{ image: { url: beer.image_url } }}>
                                        </CardHeading>
                                    </CardHeader>
                                    <CardBody>
                                        <BeerTitle> {beer.name} </BeerTitle>
                                        <BeerDetail> {beer.detail}</BeerDetail>
                                        <BeerCost> RD${(beer.cost).toFixed(2)}/Unit </BeerCost>
                                        <BeerPromotion> {beer.promotion} </BeerPromotion>
                                        <BeerViewLink to='/'> View details</BeerViewLink>
                                    </CardBody>
                                    <CardFooter>
                                        <ColumnCustom theme={{ column: 1.5 }}>
                                            <Button onClick={() => amoundHandleClick(false, beer)} >
                                                <MinusCircleCustom theme={{ color: '#bfc2c0' }} >
                                                </MinusCircleCustom>
                                            </Button>
                                        </ColumnCustom>
                                        <ColumnCustom theme={{ column: 5 }}>
                                            <CardInput type="number" value={beer.amount} disabled>
                                            </CardInput>
                                        </ColumnCustom>
                                        <ColumnCustom theme={{ column: 1.5 }}>
                                            <Button onClick={() => amoundHandleClick(true, beer)} >
                                                <PlusCircleCustom theme={{ color: '#bfc2c0' }}>
                                                </PlusCircleCustom>
                                            </Button>
                                        </ColumnCustom>
                                        <ColumnCustom theme={{ column: 4 }}>
                                            <CardButton onClick={() => addToCart(beer)}>ADD</CardButton>
                                        </ColumnCustom>
                                    </CardFooter>
                                </CardWrapper>
                            </Column>
                        )
                    })}
                </Row>
            </Container>

        </div>
    );
}


export default connect(UtilStore.mapStateToProps)(Card);