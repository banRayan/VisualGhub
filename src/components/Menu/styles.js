import styled from "styled-components";
import { colors, fonts } from '../../styles/themes/theme';

export const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.041);
`;

export const Header = styled.div`
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font: 900 1.7rem ${fonts.mainFont};
    color: ${colors.primary};
    padding: .8rem;
    cursor: pointer;

    &:hover{
        background-color: ${colors.secondary100};
        transition: .3s;
        color: #fff;
    }
`;