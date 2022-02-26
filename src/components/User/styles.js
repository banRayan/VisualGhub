import styled from "styled-components";
import { fonts } from '../../styles/themes/theme';

export const Container = styled.div`
    height: 3.5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Picture = styled.img`
    background-color: white;
    margin-right: 1rem;
    border-radius: 5px;
`;

export const UserContainer = styled.div`
    color: white;

    h1{
        font: 600 1.3rem 'Poppins', Arial, Helvetica, sans-serif;
    }

    p{
    font: ${fonts.text400};
    }
`;


