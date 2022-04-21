import styled from "styled-components";
import { colors, fonts } from '../../styles/themes/theme'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: ${colors.primary};

    display: flex;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const PageContainer = styled.div`
    display: flex;
    padding: 50px;

    width: 100%;
    height: 100%;
`;

export const GridContainer = styled.main`
    width: 100%;
    height: 100%;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 2fr;
    grid-template-areas: 
    'infoArea descriptionArea'
    'counterArea .'   ;
    
    `;

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content: flex-start;
`;

export const InfoArea = styled.div`
    grid-area: infoArea;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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
    justify-content: flex-start;

`;

export const DescriptionContainer = styled.div`
    width: 400px;
    height: 200px;
    border-radius: 5px;
    background-color: ${colors.light} ;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
`;

export const Description = styled.p`
    width: 300px;

    font: ${fonts.text400};
    color: ${colors.secondary200};
`;


export const RightBar = styled.div`
    width: 80px;
    height: 100vh;
    background-color: ${colors.primary} ;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2{
        padding: 20px;
        display: flex;
        align-items: center;
        color: ${colors.light};
    }
`;

//Card Area

export const CounterArea = styled.div`
    grid-area: counterArea;

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const CounterContainer = styled.div`
    width: 400px;
    height: 200px;

    display: flex;
    align-items: center;

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
    color: ${colors.secondary200};
`;

//deal with lack of information

export const NoClickContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const NoClick = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 5px;

    p{
        color: ${colors.light};
        font: ${fonts.text400};
    }
`;

export const NoDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        color: ${colors.secondary200};
        font: ${fonts.text400};
    }
`;