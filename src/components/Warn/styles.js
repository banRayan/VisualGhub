import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles/themes/theme';

export const Container = styled.div`
    width: 445px;
    height: 105px;
    background-color: ${COLORS.PRIMARY_600};
    color: ${COLORS.TEXT_PRIMARY};
    border-radius: 5px;
    box-shadow: ${COLORS.SHADOW};
    margin-bottom: 22px;

    display: flex;
    align-items: center;
`;

export const IconContainer = styled.div`
    width: 85px;
    height: 105px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 39px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Message = styled.p`
    font: ${FONTS.TEXT_500} ${FONTS.MAIN};
    color: ${COLORS.TEXT_PRIMARY};
`;