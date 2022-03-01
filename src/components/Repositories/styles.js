import styled from "styled-components";
import { fonts } from '../../styles/themes/theme';

export const Container = styled.ul`
    width: 500px;
    min-height: 450px;
    max-height: 650px; 
    background-color: white;
    border-radius: 5px;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.041);

    font: ${fonts.text400};
    display:flex;
    flex-direction: column;

    overflow-y: auto;
    margin-right: 2rem;

    &::-webkit-scrollbar{
    background-color: white;
    border-radius: 0 10px 10px 0;
    }

    &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    }
`;

export const List = styled.li`
`;