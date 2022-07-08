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
    justify-content: flex-start;
`;

export const Content = styled.div`
    display: flex;
`;

export const ContentContainer = styled.main`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LeftContent = styled.section`
    max-height: 600px;
    display: flex;
    flex-direction: column;
`

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
    /* padding-bottom: .8rem; */
    font: ${light.fonts.text400} ${light.fonts.fontMain};

    display: block;
    margin: 0 auto;

`;

export const TitleCard = styled.div`
    width: 150px;
    /* background-color: ${light.colors.background}; */
    color: ${light.colors.secondary80};
    /* padding: .1rem 1rem; */
    margin: 0 1rem 1rem 0;
    border-radius: 5px;
    font: 500 .9rem ${light.fonts.fontMain};

    display: flex;
    align-items: center;
    /* justify-content: center; */

`;

