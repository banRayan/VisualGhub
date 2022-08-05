import styled from "styled-components";
import { light } from "../../styles/themes/themes";

export const Container = styled.div`
    height: 120px;
    width: 100%;

    background-color: ${light.colors.primary};
    border-radius: 3px;
    padding: 0 3rem 0 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;

    @media(max-width: 400px){
        height: 60px;
    }
`;

export const SearchContainer = styled.div`
    border: 1px ${light.colors.secondary100} solid;
    padding: .2rem .8rem .2rem .8rem;
    border-radius: 8px;

    display: flex;
    align-items: center;

    @media(max-width: 400px){
        padding: 2px 4px;
    }
`;

export const ButtonSearch = styled.button`
    color: black;
    background-color: transparent;
    padding: .2rem;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        color: ${light.colors.secondary70};
    }

    @media(max-width: 400px){
        padding: 2px;
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

    @media(max-width: 400px){
        padding: 0 10px;
    }
`;

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    
    @media (max-width: 400px){
        display: none ;
    }
`;

