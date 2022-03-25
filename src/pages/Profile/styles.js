import styled from "styled-components";
import { colors, fonts } from '../../styles/themes/theme'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${colors.primary};
    color: #fff;
    font-family: ${fonts.mainFont};

    display: flex;
    align-items: center;
`;

export const ProfileContainer = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const UserContainer = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
`;

export const Picture = styled.img`
    height: 120px;
    width: 120px;
    border-radius: 5px;
    margin-bottom: 15px;
`;

export const Name = styled.p`
    color: ${colors.light};
    font: 400 1.5rem 'Poppins';
    margin-bottom: 15px;
`;

export const Bio = styled.p`
    width: 400px;
    background-color: ${colors.secondary300};
    padding: 5px;

    border-radius: 5px;
    color: ${colors.light};
    font: ${fonts.text400};
`;