import styled from 'styled-components';
import { COLORS } from '../../styles/themes/theme';

export const Container = styled.div`
    width: 220px;
    border-radius: 5px;

    display: flex;
    justify-content: flex-end;
`;

export const Bar = styled.div`
    width: 70px;
    background-color: rgba(94, 104, 115, 0.50);
    border-radius: 5px;
    box-shadow: ${COLORS.SHADOW};
`;

export const BoxItem = styled.div`
    width: 70px;
    height: 70px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .4s;

    &:hover{
        background-color: ${COLORS.OVERLAY};
        border-radius: 5px;
        /* transform: translate(-5px); */
    }
    `;

export const Item = styled.h1`
    color: ${COLORS.TEXT_PRIMARY};

    display: flex;
    align-items: center;
    justify-content: center;
`;

