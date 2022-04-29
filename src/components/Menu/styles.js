import styled from 'styled-components';
import { COLORS } from '../../styles/themes/theme';

export const Container = styled.div`
    width: 100%;
    border-radius: 5px;
    /* background-color: ${COLORS.OVERLAY}; */

    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    align-items: flex-start;
`;

export const Bar = styled.div`
    width: 60px;
    background-color: rgba(94, 104, 115, 0.50);
    border-radius: 5px;
    /* box-shadow: ${COLORS.SHADOW}; */
`;

export const BoxItem = styled.div`
    width: 60px;
    height: 60px;
    
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

export const Item = styled.h2`
    color: ${COLORS.TEXT_PRIMARY};

    display: flex;
    align-items: center;
    justify-content: center;
`;

