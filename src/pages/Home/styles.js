import styled from "styled-components";
import { colors, fonts } from '../../styles/themes/theme'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: ${colors.primary};
    padding: 2rem;

    display: grid;
    grid-template-rows: 15% 85%;
    grid-template-columns:5% 35% 60%;
    grid-template-areas: 
    "header header header"
    "menu-section main-section information-section";
`;

export const Header = styled.header`
    grid-area: header;
    
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;

export const MenuContainer = styled.section`
    grid-area: menu-section;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Main = styled.main`
    grid-area: main-section; 
    
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

export const DataContainer = styled.section`
    grid-area: information-section;

    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    "repository-description repository-data"
    "repository-infos repository-data";
`;

export const RepoDescription = styled.div`
    grid-area: repository-description;
    max-width: 600px;
    color: white;
    font: ${fonts.text400};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h1{
        font: ${fonts.title700};
        margin-bottom: 1rem;
    }
`;    

export const Title = styled.h2`
    font: ${fonts.text600};
    color: ${colors.secondary100};
    margin-bottom: 1rem;
`;

export const RepoInformation = styled.div`
    grid-area: repository-infos;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const RepoData = styled.div`
    grid-area: repository-data;
    max-width: 600px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;