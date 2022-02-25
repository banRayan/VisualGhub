import styled from "styled-components";
import  { colors, fonts } from '../../styles/themes/theme';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    font-family: ${fonts.mainFont};
    background-color: ${colors.primary};
    color: #fff;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;