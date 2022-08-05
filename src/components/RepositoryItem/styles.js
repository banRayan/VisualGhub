import styled from "styled-components";
import { light } from '../../styles/themes/themes';

export const Container = styled.button`
    width: 100%;
    background-color: transparent;
    color: ${light.colors.text_primary};
    font: ${light.fonts.text600} ${light.fonts.fontMain};
    padding: 19px 32px;
    border: none;
    border-radius: 5px;
    text-align: left;
    cursor: pointer;
    transition: .3s;

    &:hover{
    transform: translateX(15px);
    }
`

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;


export const Techs = styled.div`
    color: ${light.colors.secondary90};
    font: 500 .8rem ${light.fonts.fontMain};
    margin-top: .3rem;
`;
