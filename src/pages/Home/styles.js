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

//innners

export const DescriptionContainer = styled.div``;

export const InfosContainer = styled.div``;

export const ParamentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardCount = styled.div`
    height: 2.8rem;
    width: 2.8rem;
    margin: 1rem 0; 

    background-color:  #fff;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.041);

    font: ${fonts.text600};
    color: ${colors.secondary200};
    border-radius: 5px;
    margin-right: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
`;


export const Link = styled.a`
    font: ${fonts.text400};
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    
    &:hover{
    text-decoration: underline;
    color: ${colors.secondary200};
    transition: .2s;
}
`;

