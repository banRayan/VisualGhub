import styled from 'styled-components';
import {COLORS, FONTS } from '../../styles/themes/theme';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 38px 50px 38px 50px;
    background-color: ${COLORS.BACKGROUND};

    display: flex;
    align-items: center;
`;

export const Main = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

export const WarnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

//Data Repository

export const DataContainer = styled.div`
    width: 500px;
    height: 600px;
    /* background-color: ${COLORS.OVERLAY}; */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ItemContainer = styled.div`
    width: 340px;

    display: flex;
    flex-direction: column;

    margin-bottom: 50px;
`;

export const SectionName = styled.h1`
    color: ${COLORS.TEXT_PRIMARY};
    font: 500 3rem ${FONTS.MAIN};

    margin-bottom: 12px;
`;

export const ItemName = styled.p`
    color: ${COLORS.TEXT_PRIMARY};
    font: ${FONTS.TEXT_500} ${FONTS.MAIN};
`;

export const DescriptionContainer = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;

    margin-bottom: 50px;
`;

export const Title = styled.h2`
    color: ${COLORS.PRIMARY_600};
    font: ${FONTS.TEXT_500} ${FONTS.MAIN};

    margin-bottom: 12px;
`;

export const Description = styled.p`
    color: ${COLORS.TEXT_PRIMARY};
    font: ${FONTS.TEXT_500} ${FONTS.MAIN};
`;


//Score 

export const CardsContainer = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 50px;
`;

export const CardScore = styled.div`
    width: 90px;
    height: 40px;
    background-color: ${COLORS.OVERLAY};
    border-radius: 5px;
    padding: 0 7px 0 12px;
    margin-right: 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;

`;
export const Score = styled.p`
    color: ${COLORS.TEXT_PRIMARY};
    font: ${FONTS.TEXT_500} ${FONTS.MAIN};
`;

export const ScoreIcon = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.TEXT_PRIMARY};
`;

export const Link = styled.a`
    color: ${COLORS.TEXT_PRIMARY};
    font: ${FONTS.TEXT_500} ${FONTS.MAIN};
    text-decoration: none;
    cursor: pointer;
    transition: .2s;

    display: flex;
    align-items: center;

    h2{ 
        color: ${COLORS.TEXT_PRIMARY};

        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 7px;
    }

    &:hover{
        text-decoration: underline;
        color: ${COLORS.PRIMARY_600};
    }
`;