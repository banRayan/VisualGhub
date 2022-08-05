import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { light } from '../../styles/themes/themes';

export const Container = styled.div`
    height: 100%;
    width: 400px;
    background-color: ${light.colors.primary};
    border-radius: 3px;
    padding: 0 1.8rem 0 1.8rem;

    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media (max-width: 1680px){
        padding: 0 1rem 0 1rem;
        width: 80px;
        display: flex;
        align-items: center;
    }

    @media (max-width: 400px){
        padding: 0 .8rem 0 1rem;
        width: 60px;
        padding: .5rem;
        display: flex;
        align-items: center;
    }
`;

export const Bar = styled.div`
    width: 100%;
`;


export const Brand = styled.div`
    height: 50px;
    width: 50px;
    background-color: ${light.colors.secondary100};
    border-radius: 15px;
    margin: 2rem 0 2rem 0;
    
    @media (max-width: 1680px){
        height: 40px;
        width: 40px;
        margin: 1rem 0;
    }

    @media (max-width: 400px){
        height: 30px;
        width: 30px;
        border-radius: 10px;
        margin: 1rem 0;
    }
`;


export const Text = styled.p`
    font: ${light.fonts.text600} ${light.fonts.fontMain};
    color: ${light.colors.secondary80};
    margin-left: 1rem;

    @media (max-width: 1680px){
        display: none;
    }
`;

export const Icon = styled.i`
    color: ${light.colors.secondary80};

    display: flex;
    align-items: center;
`;

export const BoxItem = styled.div`
    width: 100%;
    height: 50px;
    
    padding: .8rem;
    margin: .3rem 0;
    border-radius: 5px;
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    transition: .2s;

    &:hover ${Text}{
        color: ${light.colors.text_primary};
    }

    &:hover ${Icon} {
        color: black;
    }

    @media (max-width: 1680px){
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 400px){
        padding: .4rem;
        margin: 2px 0;
    }
`;




export const StyledLink = styled(NavLink)`
    text-decoration: none;

    &.active{
        ${BoxItem}{
            background-color: ${light.colors.background};
        }

        ${Text}{
        color: ${light.colors.text_primary};
        }

        ${Icon} {
        color: black;
        }
    }
`;
