import styled from "styled-components";
import { colors, fonts } from '../../styles/themes/theme'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: ${colors.primary};

    display: flex;
`;

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content:center ;

    margin-left: 5px;
`;

export const MainContainer = styled.main`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 2fr;
    grid-template-areas: 'infoArea descriptionArea';

`;

export const DescriptionArea = styled.div`
    grid-area: descriptionArea;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const DescriptionContainer = styled.div`
    width: 400px;
    height: 200px;
    border-radius: 5px;
    background-color: ${colors.light} ;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Description = styled.p`
    width: 300px;

    font: ${fonts.text400};
    color: ${colors.secondary200};
`;

export const Title = styled.h1`
    font: ${fonts.title700};
    color: ${colors.light};
`;



export const InfoArea = styled.div`
    grid-area: infoArea;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InfoContainer = styled.div`
`;

export const RightBar = styled.div`
    width: 55px;
    height: 100vh;
    background-color: ${colors.secondary100} ;
`;