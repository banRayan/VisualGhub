import styled from 'styled-components';
import { COLORS } from '../../styles/themes/theme';

export const Container = styled.div`
    background-color: ${COLORS.PRIMARY_500};
    width: 500px;
    min-height: 425px;
    max-height: 600px;
    border-radius: 5px;
    margin-left: 20px;

    display: flex;
    flex-direction: column ;
    justify-content: flex-start;
`;

export const List = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: column ;

    overflow-y: auto;

    &::-webkit-scrollbar{
    /* background-color: ${COLORS.TEXT_PRIMARY}; */
    border-radius: 0  5px  5px 0;
    }
    &::-webkit-scrollbar-thumb{
    border-radius: 5px;
    }
`;

export const Item = styled.li`
    text-decoration: none;
`;
