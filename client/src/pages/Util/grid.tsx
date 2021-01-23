import styled from 'styled-components';

export function getWidthGrid(value: any) {

    if (!value) return;

    let width = value / 12 * 100;
    return `${width}%;`;
}

export const Container = styled.div`
    box-sizing: border-box;
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &after{
        clear: both;
    }
`


export const Row = styled.div`
    width: 100%;
    height: auto;
    float: left;
    box-sizing: border-box;
    &:before,
    &:after {
        content: " ";
        display: table; 
    }
    &after{
        clear: both;
    }
`

export const Column = styled.div`
    float: left; 
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;
    color:#000;
    @media only screen and (max-width: 768px){
        width: ${props => getWidthGrid(props.theme.devices.mobile)};
    }
    @media only screen and (min-width: 768px){
        width: ${props => getWidthGrid(props.theme.devices.tablet)};
    }
    @media only screen and (min-width: 1000px){
        width: ${props => getWidthGrid(props.theme.devices.desktop)};
    }
    margin-bottom: 1%;
`;

export const ColumnCustom = styled.div`
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;
    width: ${props => getWidthGrid(props.theme.column)};
   
`;
