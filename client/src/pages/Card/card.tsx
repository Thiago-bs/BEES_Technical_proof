import React, {useEffect, useState} from 'react';
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
    Container,
    Row,
    Column,
    MinusCircleCustom,
    CardInput,
    CardFooter,
    CardButton,
    ColumnCustom,
    PlusCircleCustom,
    BeerViewLink
  } from "./cardElement";

const definedColumn = {
    devices:{
        mobile: 12,
        tablet: 6,
        desktop: 4,
    }
}

interface Beer{
    id: number;
    name: string;
    detail: string;
    cost: number;
    promotion: string;
    image_url: string;
}

function Card() {
    const [beers, setBeers] = useState<Beer[]>([]);

    // Execute on load page, just only once
    useEffect(() => {
        api.get('beers').then(response => {
            setBeers(response.data);
        });
    }, []);

    console.log(beers, "show")
    
    return (
        <div>
            LSASA
        <Container>
            <Row>
                {beers.map(beer => {
                    return (
                    <Column theme={definedColumn}>
                        <CardWrapper>
                            <CardHeader>
                                <CardHeading theme={{image:{url: beer.image_url}}}>
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
                                <ColumnCustom theme={{column:1.5}}>
                                        <MinusCircleCustom theme={{color:'#bfc2c0'}}>
                                        </MinusCircleCustom>   
                                </ColumnCustom>
                                <ColumnCustom theme={{column:5}}>
                                    <CardInput type="number" disabled>
                                    </CardInput>
                                </ColumnCustom>
                                <ColumnCustom theme={{column:1.5}}>   
                                        <PlusCircleCustom theme={{color:'#bfc2c0'}}>
                                        </PlusCircleCustom>  
                                </ColumnCustom>
                                <ColumnCustom theme={{column:4}}>   
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