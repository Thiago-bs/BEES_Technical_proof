import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import * as Util from '../Util/grid'
export const GoBack = styled(Link)`
    font-size: 0.6em;
    text-align: left;
    color: #A52A2A	;
    font-style: bold;
`

export const CartWrapper = styled.div`
    overflow: hidden;
    padding: 0 0 16px;
    margin: 0 0 0;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0px 10px rgba(0, 0, 0, 0.08);
    border: 2px solid;
    border-radius: 5px;
    position: relative; 
    margin-bottom: 2%;
`;

export const CartImage = styled.img`
    font-size: 24px;
    text-align: center;
    content: url(${props => props.theme.image.url});
    width: 100px;
    height: 120px;
`;

