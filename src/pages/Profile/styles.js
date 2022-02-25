import styled from "styled-components";
import { colors, fonts } from '../../styles/themes/theme'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${colors.primary};
    color: #fff;
    font-family: ${fonts.mainFont};
`;