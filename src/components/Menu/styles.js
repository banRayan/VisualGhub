import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS, FONTS } from '../../styles/themes/theme';

export const Container = styled.div`
    height: 100%;
    width: 400px;
    background-color: ${COLORS.PRIMARY_500};
    border-radius: 3px;
    padding: 0 1.8rem 0 1.8rem;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

export const Brand = styled.div`
    height: 50px;
    width: 50px;
    background-color: #3B3936;
    border-radius: 15px;
    margin: 2rem 0 2rem 0;
`;

export const Bar = styled.div`
    width: 100%;
    /* box-shadow: ${COLORS.SHADOW}; */
`;

export const Text = styled.p`
    font: ${FONTS.TEXT_500} ${FONTS.MAIN};
    color: #878A8C;
    margin-left: 1rem;
`;

export const Icon = styled.i`
    color: #878A8C;
`;

export const BoxItem = styled.div`
    width: 100%;
    height: 50px;
    
    padding: .8rem;
    margin: .3rem 0 .3rem 0;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    transition: .2s;

    &:hover{
        background-color:  #F2F2F2;
        color: black;
    }

    &:hover ${Text}{
        color: black;
    }

    &:hover ${Icon} {
        color: black;
    }
`;




export const StyledLink = styled(Link)`
    text-decoration: none;

`;