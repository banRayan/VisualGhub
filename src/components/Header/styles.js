import styled from 'styled-components';
import { colors, fonts } from '../../styles/themes/theme';

export const Container = styled.div`
    height: 90px;
    width: 100%;

    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font: ${fonts.fontLogo};
    color: ${colors.light};
`;