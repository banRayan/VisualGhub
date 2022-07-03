import styled from 'styled-components';
import { colors, fonts } from '../../styles/themes/theme';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: ${colors.primary};

    display: flex;
    align-items: center;
`;

export const ErrorContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DescriptionContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-right: 50px;
`;

export const Title = styled.h1`
    color: ${colors.light};
    font: 500 6rem 'Poppins';
`;

export const Message = styled.p`
    color: ${colors.light};
    font: 400 1.5rem 'Poppins';
    margin-bottom: 27px;
`;

export const Button = styled.button`
    width: 200px;
    height: 60px;
    border-radius: 5px;
    border: none;
    box-shadow: 5px 4px 12px rgba(0, 0, 0, 0.25);
    font: ${fonts.text400};
    cursor: pointer;
    transition: .2s;

    p{
        text-decoration: none;
    }

    &:hover{
        background-color: ${colors.primary};
        color: ${colors.light};
        border: 1px solid ${colors.light};
    }
`;

export const ErrorDescription = styled.h2`
    color: rgba(255, 255, 255, 0.5);
    font: 700 20rem 'Poppins';
`;