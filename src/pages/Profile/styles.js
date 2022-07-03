import styled from "styled-components";
import { COLORS, FONTS } from '../../styles/themes/theme'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 38px 50px 38px 50px;
    background-color: ${COLORS.BACKGROUND};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Main = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

export const SettingContainer = styled.div`
    width: 100%;
`;

export const Card = styled.div`
    width: 490px;
    background-color: ${COLORS.TEXT_PRIMARY};
    box-shadow: ${COLORS.SHADOW};
    border-radius: 5px;
    padding: 33px 54px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const User = styled.div`
    display: flex;

    margin-bottom: 30px;
`;

export const Avatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;

    margin-right: 20px;
`;

export const Log = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Name = styled.h2`
    color: ${COLORS.PRIMARY_900};
    font: 500 1.5rem ${FONTS.MAIN};
`;

export const Login = styled.p`
    color: ${COLORS.PRIMARY_600};
    font: ${FONTS.TEXT_400} ${FONTS.MAIN};
`;

export const Bio = styled.p`
    color: ${COLORS.PRIMARY_900};
    font: ${FONTS.TEXT_500} ${FONTS.MAIN};

    margin-bottom: 30px;
`;

//Follow Up
export const FollowUpContainer = styled.div`
    display: flex;

    margin-bottom: 30px;
`;

export const FollowUp = styled.div`
    display: flex;
    align-items: center;

    margin-right: 30px;
`;

export const NumberFollowUp = styled.h3`
    color: ${COLORS.PRIMARY_900};
    font: ${FONTS.TEXT_600} ${FONTS.MAIN};

    margin-right: 10px;
`;

export const NameFollowUp = styled.p`
    color: ${COLORS.PRIMARY_600};
    font: ${FONTS.TEXT_400} ${FONTS.MAIN};
`;


//Social 

export const SocialContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 30px;
`;

export const Social = styled.a`
    display: flex;
    align-items: center;

    text-decoration: none;
    cursor: pointer;
    transition: .2s;

    margin-right: 20px;

    &:hover{
        text-decoration: underline;
    }
`;

export const MidiaName = styled.p`
    color: ${COLORS.PRIMARY_900};
    font: ${FONTS.TEXT_500} ${FONTS.MAIN};

    margin-right: 5px;
`;

export const MidiaIcon = styled.h3`
    color: ${COLORS.PRIMARY_800};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Location = styled.div`
    display: flex;
    align-items: center;
`;