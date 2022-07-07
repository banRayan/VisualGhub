import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #F2F2F2;

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

export const ContentContainer = styled.main`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`;

export const Card = styled.p`
    width: 450px;
    max-height: 140px;
    /* padding: 0 1rem 0 1rem; */
    font: 400 1rem 'Poppins';

    display: block;
    margin: 0 auto;

`;



export const TitleCard = styled.div`
    width: 150px;
    background-color: #666;
    color: white;
    padding: .1rem 1rem;
    margin: 0 1rem 1.2rem 0;
    border-radius: 5px;
    font: 400 .8rem 'Poppins';

    display: flex;
    align-items: center;
    justify-content: center;

`;

