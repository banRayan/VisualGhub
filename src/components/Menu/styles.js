import styled from "styled-components";
import { colors, fonts } from '../../styles/themes/theme';

export const Container = styled.div`
    height: 100vh;
    width: 60px;

    background-color: ${colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div`
    height: 55px;
    width: 55px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font: 900 1.5rem ${fonts.mainFont};
    color: #fff;
    padding: .8rem;
    cursor: pointer;

    &:hover{
        background-color: ${colors.secondary100};
        transition: .3s;
        color: #fff;
    }
`;