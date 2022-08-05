import styled from 'styled-components';
import { light } from '../../styles/themes/themes';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    background-color: ${light.colors.primary};

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
    color: ${light.colors.secondary100};
    font: 500 6rem ${light.fonts.fontMain};
`;

export const Message = styled.p`
    color: ${light.colors.secondary90};
    font: 400 1.5rem ${light.fonts.fontMain};
    margin-bottom: 27px;
`;

export const Button = styled.button`
    width: 200px;
    height: 60px;
    border-radius: 5px;
    border: none;
    font:${light.fonts.text600} ${light.fonts.fontMain};
    color: ${light.colors.secondary100};
    cursor: pointer;
    transition: .2s;

    p{
        text-decoration: none;
    }

    &:hover{
        background-color: ${light.colors.secondary100};
        color: ${light.colors.text_secondary};
        border: 1px solid ${light.colors.text_secondary};
    }
`;

export const ErrorDescription = styled.h2`
    color: ${light.colors.secondary100};
    font: 700 20rem ${light.fonts.fontMain};
`;