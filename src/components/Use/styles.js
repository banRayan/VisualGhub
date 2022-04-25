import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles/themes/theme';

export const Container = styled.div`
    width: 305px;
    height: 60px;
    background-color: ${COLORS.OVERLAY};
    border-radius: 5px;

    display: flex;
    align-items: center;
`;

export const BoxAvatar = styled.div`
    width: 60px;
    height: 60px;
    background-color: ${COLORS.OVERLAY};
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

export const UserContainer = styled.div`
    width: 265px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Name = styled.p`
    margin-left: 25px;
    font: 500 1.2rem ${FONTS.MAIN};
    color: ${COLORS.TEXT_PRIMARY};
`;

export const BoxIcon = styled.div`
    width: 60px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const Icon = styled.h2`
    color: ${COLORS.TEXT_PRIMARY};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;
    cursor: pointer;

    &:hover{
        transform: translateY(5px);
    }
`;