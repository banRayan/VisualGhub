import styled from "styled-components";
import { light } from '../../styles/themes/themes';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${light.colors.background};
    display: flex;
`;

export const RightContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1024px){
        overflow-y: scroll;
    }
`;

export const Content = styled.div`
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    
    @media (max-width: 1024px){
        margin: auto;
        justify-content: center;
        align-items: flex-start;
        overflow-y: scroll;
    }

    @media (max-width: 400px){
        padding: 0;
    }
`;

export const LeftContent = styled.section`
    max-height: 600px;
    display: flex;
    flex-direction: column;

    @media (min-width: 1025px){
        margin-right: 1rem;
    }
`;

export const CardContainer = styled.div`
    width: 450px;
    background-color: ${light.colors.primary};
    border-radius: 5px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

`;

export const Card = styled.p`
    max-height: 140px;
    font: ${light.fonts.text400} ${light.fonts.fontMain};
    display: block;
    margin: 0 auto;

    @media (max-width: 400px){
        margin: 0;
        width: 250px;
        max-height: 400px;
    }


`;

export const TitleCard = styled.div`
    width: 150px;
    color: ${light.colors.secondary80};
    margin: 0 1rem 1rem 0;
    border-radius: 5px;
    font: 500 .9rem ${light.fonts.fontMain};
    display: flex;
    align-items: center;
`;

