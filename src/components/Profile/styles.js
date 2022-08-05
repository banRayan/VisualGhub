import styled from "styled-components";
import { light } from "../../styles/themes/themes";

export const Container = styled.section`
    width: 450px;
    max-height: 400px;
    background-color: ${light.colors.primary};
    border-radius: 5px;
    padding:  1.5rem  2rem 2rem 2rem;
    margin-bottom: 1rem;

    
    @media (min-width: 1025px){
        margin-right: 1rem;
    }

    @media(max-width: 400px){
        width: 100%;
        margin-right: 0;
    }

`;

export const Avatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;

    margin-right: 20px;

    @media(max-width: 400px){
        margin-bottom: 20px;
    }
`;

export const UserContainer = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${light.colors.background};

    @media(max-width: 400px){
        width: 250px;
        flex-direction: column;
        align-items: center;
    }
`;

export const User = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Name = styled.p`
    font: ${light.fonts.title500} ${light.fonts.fontMain};

    @media(max-width: 400px){
        font: ${light.fonts.text500} ${light.fonts.fontMain};
    }
`;

export const Username = styled.p`
    font: ${light.fonts.text500} ${light.fonts.fontMain};
    color: ${light.colors.secondary80};

    @media(max-width: 400px){
        text-align: center;
    }
`;

export const Bio = styled.p`
    max-height: 140px;
    font: ${light.fonts.text400} ${light.fonts.fontMain};
    margin-bottom: 2rem;
    overflow: hidden;

    @media(max-width: 400px){
        display: none;
    }
`;

export const FollowupContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

export const Followup = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2.5rem;

    @media(max-width: 400px){
        margin-right: 1.2rem;
    }
`;

export const FollowupNumber = styled.p`
    font: ${light.fonts.text700} ${light.fonts.fontMain};
    margin-right: .5rem;
`;

export const FollowupLabel = styled.p`
    font: ${light.fonts.text400} ${light.fonts.fontMain};
    color: ${light.colors.secondary80};
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;

    @media(max-width: 400px){
        width: 250px;
    }

`;

export const Link = styled.a`
    text-decoration: none;
    font: ${light.fonts.text500} ${light.fonts.fontMain};
    padding: 0 1.5rem;
    display: block;

    &:hover{
        /* text-decoration: underline; */
        font-weight: 600;
    }

    @media(max-width: 400px){
        padding: 0 1rem;
    }
`;

export const MidiaName = styled.p`
    font: ${light.fonts.text500} ${light.fonts.fontMain};
    color: ${light.colors.text_primary};
    transition: .2s;

    &:hover{
        transform: translateY(-5px);
        font-weight: 600;
    }
`;