import styled from "styled-components";
import { colors } from "../../styles/themes/theme";

export const Container = styled.div`
    width: 60px;
    height: 100vh;
    background-color: ${colors.primary} ;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export  const Item = styled.div`
    height: 55px;
    width: 55px;
    color: ${colors.light};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3{
        font-size: 1.5rem;
    }
`;