import styled from "styled-components";
import { light } from '../../styles/themes/themes';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    font-family: ${light.fonts.fontMain};
    background-color: ${light.colors.background};
    
    display: flex;
    align-items: center;
    justify-content: center;
`;