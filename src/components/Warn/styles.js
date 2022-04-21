import styled from 'styled-components';
import { colors } from '../../styles/themes/theme';

export const Container = styled.div`
    width: 445px;
    height: 105px;
    background-color: ${colors.secondary100};
    color: ${colors.light};
    border-radius: 5px;
    box-shadow: 5px 4px  12px rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
`;

export const IconContainer = styled.div`
    width: 85px;
    height: 105px;
    border-radius: 5px;
    /* background-color: white; */

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
    font: 500 1rem 'Poppins';
    color: ${colors.light};
`;