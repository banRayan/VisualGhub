import styled from "styled-components";
import { colors } from '../../styles/themes/theme'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: ${colors.primary};

    display: flex;
`;

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content:center ;
`;

export const MainContainer = styled.main`
    width: 100%;
    height: 100%;
`;