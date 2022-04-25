import styled from 'styled-components';
import { COLORS } from '../../styles/themes/theme';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 38px 50px 38px 50px;
    background-color: ${COLORS.BACKGROUND};

    display: flex;
    align-items: center;
    justify-content: center;
`;