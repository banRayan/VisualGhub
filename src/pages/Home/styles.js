import styled from "styled-components";
import { colors, fonts } from '../../styles/themes/theme'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: ${colors.primary};

    display: flex;
`;

export const MainContainer = styled.main`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 2fr;
    grid-template-areas: 'infoArea descriptionArea'
                            'counterArea .'   ;

`;

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content:center ;

`;

export const InfoArea = styled.div`
    grid-area: infoArea;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InfoContainer = styled.div`
    width: 400px;
    height: 200px;

    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font: ${fonts.title700};
    color: ${colors.light};
    margin-bottom: 20px;
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;

    h3{
        display: flex;
        align-items: center;
        color: ${colors.light};
    }
`;

export const Link = styled.a`
    color: ${colors.secondary100};
    text-decoration: none;
    cursor: pointer;
    margin-left: 10px;

    &:hover{
        text-decoration: underline;
        color: ${colors.light}
    }
`;

export const Text = styled.p`
    font: ${fonts.text400};
`;

export const DescriptionArea = styled.div`
    grid-area: descriptionArea;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const DescriptionContainer = styled.div`
    width: 400px;
    height: 200px;
    border-radius: 5px;
    background-color: ${colors.light} ;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Description = styled.p`
    width: 300px;

    font: ${fonts.text400};
    color: ${colors.secondary200};
`;

export const RightBar = styled.div`
    width: 55px;
    height: 100vh;
    background-color: ${colors.secondary100} ;
`;

//Card Area

export const CounterArea = styled.div`
    grid-area: counterArea;

    display: flex;
    align-items: center;
    justify-content: center;

    h4{
        display: flex;
        align-items: center;
        color: ${colors.secondary200};
    }
`;

export const CountContainer = styled.div`
    width: 80px;
    height: 40px;
    border-radius: 5px;
    background-color: ${colors.light};
    color: ${colors.secondary200};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    margin-right: 20px;
`;

export const Count = styled.div`
    font: ${fonts.text600};
    color: ${colors.secondary100};

`;
