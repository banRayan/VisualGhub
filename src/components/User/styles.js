import styled from "styled-components";
import { colors, fonts } from '../../styles/themes/theme';

export const Container = styled.div`
    height: 128px;
    background-color: ${colors.light};
    margin-bottom: .1rem;
    border-radius: 0 5px 0 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


export const Picture = styled.img`
    height: 65px;
    width: 65px;
    border-radius: 5px;
    margin-right: 1rem;
`;

export const UserContainer = styled.div`
    color: ${colors.secondary200};

    h1{
        font: 600 1.3rem 'Poppins', Arial, Helvetica, sans-serif;
    }

    p{
    font: ${fonts.text400};
    }
`;


