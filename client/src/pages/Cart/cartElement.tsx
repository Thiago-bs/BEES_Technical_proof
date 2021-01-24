import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { Trash } from '@styled-icons/boxicons-regular/Trash';

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
    width: 70px;
    height: 90px;
`;

export const TrashCustom = styled(Trash)`
    border-color: ${props => props.theme.color};
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -3px);
    }
    margin: 4px;
    padding: 1px;
    background-color: #fff;
    border-style: solid;
    border-color: ${props => props.theme.color};
    border-width: 1.5px;
    border-radius: 50%;

    color: ${props => props.theme.color};
    height: 1.7em;
`