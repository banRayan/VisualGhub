import styled from "styled-components";
import { colors, fonts } from "../../styles/themes/theme";

export const Container = styled.div`
    height: 400px;
    width: 650px;
    background-color: #fff;
    border-radius: 5px;
    padding: 3rem;
`;

export const HeadingContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Heading = styled.div`
    color: ${colors.primary};
    margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
    font: ${fonts.title500};
    margin-bottom: .5rem; 
`;

export const Description = styled.div`
    font: ${fonts.text400};
    color: ${colors.secondary100};
`;

export const Logo = styled.div`
    font: 600 1.2rem 'Poppins', Arial, Helvetica, sans-serif;
    color: ${colors.secondary100};
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
    color: ${colors.secondary100};
    position: absolute;
    top: 20%;
    left: 3%;
`;

export const Input = styled.input`
    height: 40px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid ${colors.secondary100};
    margin-bottom: 1rem;
    padding-left: 2rem;

    &:placeholder-shown{
        color: #5E6873;
        font-size: 1rem;
        font-weight: 500;
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
    font: 500 1rem ${fonts.mainFont};
    color: #fff;
    background-color: ${colors.secondary100};
    cursor: pointer;
    transition: .5s;

    &:hover{
        background-color: ${colors.primary};
    }
`;

export const Paragraph = styled.p`
    font: 400 .9rem ${fonts.mainFont};
    color: ${colors.secondary100};
    text-align: center;
`;

export const Link = styled.a`
    font-weight: 500;
    color: ${colors.secondary100};
    text-decoration: none;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
        color: ${colors.primary};
    }
`;
