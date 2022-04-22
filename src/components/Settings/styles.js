import styled from 'styled-components';
import { COLORS } from '../../styles/themes/theme';

export const Container = styled.div`
    width: 70px;
    height: 70px;
    background-color: ${COLORS.OVERLAY};
    border-radius: 5px;
    /* box-shadow: ${COLORS.SHADOW}; */
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.h1`
    color: ${COLORS.TEXT_PRIMARY};

    display: flex;
    align-items: center;
    justify-content: center;
`;