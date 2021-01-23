import React, { useEffect, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import api from '../../services/api';

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

import { Container, Row, Column, ColumnCustom } from '../Util/grid';

const definedColumn = {
    devices: {
        mobile: 12,
        tablet: 6,
        desktop: 4,
    }
}

interface Beer {
    id: number;
    name: string;
    detail: string;
    cost: number;
    promotion: string;
    image_url: string;
    amount: number;
}
function Card() {
    const [beers, setBeers] = useState<Beer[]>([]);

    // Execute on load page, just only once
    useEffect(() => {
        api.get('beers').then(response => {
            setBeers(response.data);
        });
    }, []);

    function amoundHandleClick(isAdd: boolean, beer: Beer) {

        let value = 0;
        if (!isAdd && beer.amount !== 0) {
            console.log("entrei aqui ?")
            value = -1;
        }
        if (isAdd) {
            value = 1;
        }
        let changedBeers = beers.map(obj => {
            if (obj.id === beer.id) {
                obj.amount = obj.amount + value;
            }
            return obj;
        })
        setBeers(changedBeers);
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
                                        <BeerCost> RD${beer.cost}/Unit </BeerCost>
                                        <BeerPromotion> {beer.promotion} </BeerPromotion>
                                        <BeerViewLink to='/'> View details</BeerViewLink>
                                    </CardBody>
                                    <CardFooter>
                                        <ColumnCustom theme={{ column: 1.5 }}>
                                            <Button onClick={() => amoundHandleClick(false, beer)}>
                                                <MinusCircleCustom theme={{ color: '#bfc2c0' }} >
                                                </MinusCircleCustom>
                                            </Button>
                                        </ColumnCustom>
                                        <ColumnCustom theme={{ column: 5 }}>
                                            <CardInput type="number" value={beer.amount} disabled>
                                            </CardInput>
                                        </ColumnCustom>
                                        <ColumnCustom theme={{ column: 1.5 }}>
                                            <Button onClick={() => amoundHandleClick(true, beer)}>
                                                <PlusCircleCustom theme={{ color: '#bfc2c0' }}>
                                                </PlusCircleCustom>
                                            </Button>
                                        </ColumnCustom>
                                        <ColumnCustom theme={{ column: 4 }}>
                                            <CardButton disabled>ADD</CardButton>
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

export default Card;