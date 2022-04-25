import styled from 'styled-components';
import { COLORS } from '../../styles/themes/theme';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 38px 50px 38px 50px;
    background-color: ${COLORS.BACKGROUND};

    display: flex;
    align-items: center;
`;

export const Main = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: space-around;
`;

export const WarnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;