import styled from 'styled-components';
import { COLORS } from '../../styles/themes/theme';

export const Container = styled.div`
    width: 60px;
    height: 60px;
    background-color: ${COLORS.OVERLAY};
    border-radius: 5px;
    cursor: pointer;
    transition: .2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: ${COLORS.PRIMARY_600};
    }
`;

export const Icon = styled.h2`
    color: ${COLORS.TEXT_PRIMARY};

    display: flex;
    align-items: center;
    justify-content: center;
`;