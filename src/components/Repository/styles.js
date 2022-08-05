import styled from 'styled-components';
import { light } from '../../styles/themes/themes';

export const Container = styled.div`
    background-color: ${light.colors.primary};
    width: 450px;
    min-height: 425px;
    max-height: 600px;
    border-radius: 5px;

    display: flex;
    flex-direction: column ;

    @media (max-width: 400px){
        width: 100%;
    }
`;

export const List = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: column ;

    overflow-y: auto;

    &::-webkit-scrollbar{
    border-radius: 0  5px  5px 0;
    }
    
    &::-webkit-scrollbar-thumb{
    border-radius: 5px;
    }
`;

export const Item = styled.li`
    text-decoration: none;
`;
