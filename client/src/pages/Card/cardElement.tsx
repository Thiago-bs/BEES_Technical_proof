import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { Minus } from '@styled-icons/boxicons-regular/Minus';
import { NavLink as Link } from 'react-router-dom';

export const CardWrapper = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 300px;
    height: 430px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    position: relative; 
`;

export const CardHeader = styled.header`
    padding-top: 32px;
    padding-bottom: 32px;
    display: flex;
    justify-content: center;
`;

export const CardHeading = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    content: url(${props => props.theme.image.url});
    width: auto;
    height: auto;
    max-width:200px;
    max-height:150px;
    justify-content: center;
`;

export const CardBody = styled.div`
    padding-right: 16px;
    padding-left: 16px;
    position: absolute;
    width: 100%;
    bottom: 1;
`;

export const CardFooter = styled.div`
    padding-right: 16px;
    padding-left: 10px;
    padding-top: 32px;
    padding-bottom: 16px;
    position: absolute;
    bottom: 0;
`
export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-size: 14px;
  text-align:center;
  border: 1px solid #ddd;
  transition: border-bottom-color 0.25s ease-in;
  align-items: center;
  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
  background-color: #fff;
`;


export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

export const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;
  &:hover {
    opacity: .95;
  }
  border-style: solid;
  border-color: ${props => props.theme.color};
  border-width: 2px;
  
 
`;

export const PlusCircleCustom = styled(Plus)`
    border-color: ${props => props.theme.color};
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -3px);
    }
    background-color: #fff;
    border-style: solid;
    border-color: ${props => props.theme.color};
    border-width: 2px;
    border-radius: 50%;
    color: ${props => props.theme.color};
    height: 1.5em;
`
export const MinusCircleCustom = styled(Minus)`
    border-color: ${props => props.theme.color};
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -3px);
    }
    background-color: #fff;
    border-style: solid;
    border-color: ${props => props.theme.color};
    border-width: 2px;
    border-radius: 50%;
    color: ${props => props.theme.color};
    height: 1.5em;
`

export const CardButton = styled.button`
  padding: 4%;
  width: 100%;
  border-style: solid;
  border-color: #7796be;
  border-width: 2px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10%;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -3px);
  }
  color: #7796be;
  font-size: 15px;
`;


export const BeerTitle = styled.h1`
    font-size: 1.2em;
    text-align: left;
    color: #1d1d1d;
    font-style: bold;
`;

export const BeerDetail = styled.h1`
    font-size: 0.6em;
    text-align: left;
    color: #bfc2c0;
    font-style: bold;
`

export const BeerCost = styled.h1`
    font-size: 0.6em;
    text-align: left;
    color: #393939;
    font-style: bold;
    padding-top: 1em;
`

export const BeerPromotion = styled.h1`
    font-size: 0.5em;
    text-align: left;
    color: #6bab7c;
    font-style: bold;
    padding-top: 1.5em;
`

export const BeerViewLink = styled(Link)`
    font-size: 0.5em;
    text-align: left;
    color: #7796be;
    font-style: bold;
`

export const Button = styled.button`
    background: transparent;
    border: 0px;
    outline: none;
`