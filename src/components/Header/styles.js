import styled from "styled-components";
import { COLORS } from '../../styles/themes/theme'

export const Container = styled.div`
    height: 120px;
    width: 100%;

    background-color: ${COLORS.PRIMARY_500};
    border-radius: 3px;
    margin-left: .1rem;
    padding: 0 3rem 0 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SearchContainer = styled.div`
    border: 1px ${COLORS.OVERLAY} solid;
    padding: .2rem .8rem .2rem .8rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
`;

export const ButtonSearch = styled.button`
    color: ${COLORS.PRIMARY_600};
    background-color: transparent;
    padding: .2rem;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        color: black;
    }
`;

export const Search = styled.input`
    height: 2rem;
    padding: 0 1rem 0 1rem;
    border: none;
    background-color: transparent;

    &:focus{
        border: 0 none;
        outline: 0;
    }
`;

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

