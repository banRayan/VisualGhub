import styled from "styled-components";
import { light } from "../../styles/themes/themes";

export const Container = styled.section`
    max-height: 400px;
    width: 450px;
    background-color: ${light.colors.primary};
    border-radius: 5px;
    padding: 2rem;
    margin-bottom: 1rem;
`;

export const Avatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;

    margin-right: 20px;
`;

export const UserContainer = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${light.colors.background};
`;

export const User = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Name = styled.p`
    font: ${light.fonts.title500} ${light.fonts.fontMain};
    /* margin-bottom: .5rem; */
`;

export const Username = styled.p`
    font: ${light.fonts.text500} ${light.fonts.fontMain};
    color: ${light.colors.secondary80}
`;

export const Bio = styled.p`
    width: 100%;
    max-height: 100px;
    font: ${light.fonts.text400} ${light.fonts.fontMain};
    margin-bottom: 2rem;
    display: block;
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
`;

export const FollowupNumber = styled.p`
    font: ${light.fonts.text700} ${light.fonts.fontMain};
    margin-right: .5rem;
`;

export const FollowupLabel = styled.p`
    font: ${light.fonts.text400} ${light.fonts.fontMain};
    color: ${light.colors.secondary80}

`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Link = styled.a`
    text-decoration: none;
    font: ${light.fonts.text400} ${light.fonts.fontMain};
    padding: 0 1.5rem;

    &:hover{
        text-decoration: underline;
    }
`;

export const MidiaName = styled.p`
    font: ${light.fonts.text500} ${light.fonts.fontMain};
    color: ${light.colors.text_primary};
`;