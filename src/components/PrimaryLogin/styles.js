import styled from "styled-components";
import { light } from '../../styles/themes/themes';

export const Container = styled.div`
    width: 600px;
    background-color: ${light.colors.primary};
    border-radius: 5px;
    padding: 3rem;

    @media (max-width: 600px){
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 400px){
        
        padding: 1rem;
    }
`;

export const Logo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    font: 600 1.2rem ${light.fonts.fontMain};
    color: ${light.colors.secondary100};
    /* margin-bottom: 1rem; */

    @media (max-width: 600px){
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        font: 600 1.5rem ${light.fonts.fontMain};
    }
`;

export const HeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


export const Heading = styled.div`
    
    margin-bottom: 1.5rem;
    text-align: center;

    @media (max-width: 400px){
        width: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;


export const Description = styled.div`
    font: ${light.fonts.text400} ${light.fonts.fontMain};
    color: ${light.colors.secondary100};

    @media (max-width: 600px){
        width: 300px;
        font: 400 1rem ${light.fonts.fontMain};
        text-align: center;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const InputField = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

export const Icon = styled.h4`
    color: ${light.colors.secondary100};
    position: absolute;
    top: 20%;
    left: 3%;
`;

export const Input = styled.input`
    height: 40px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid ${light.colors.secondary100};
    margin-bottom: 1rem;
    padding-left: 2rem;
    background-color: transparent;

    &:placeholder-shown{
        color: ${light.colors.secondary100};
        font-size: 1rem;
        font-weight: 500;
    }

    &:focus{
        outline: 1px solid ${light.colors.secondary100};
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    height: 40px;
    width: 250px;

    border: none;
    border-radius: 5px;
    margin-bottom: 1rem;
    font: ${light.fonts.text500} ${light.fonts.fontMain};
    color: ${light.colors.text_secondary};
    background-color: ${light.colors.secondary100};
    cursor: pointer;
    transition: .5s;

    &:hover{
        background-color: ${light.colors.secondary80};
    }
`;

export const Paragraph = styled.p`
    font: 400 .9rem ${light.fonts.fontMain};
    color: ${light.colors.secondary100};
    text-align: center;
`;

export const Link = styled.a`
    font-weight: 500;
    color: ${light.colors.secondary100};
    text-decoration: none;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
        color: ${light.colors.text_primary};
    }
`;
