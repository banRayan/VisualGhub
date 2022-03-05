import styled from "styled-components";
import { colors } from '../../styles/themes/theme';

export const Container = styled.button`
    width: 100%;
    color: ${colors.secondary200};
    font: 600 1.2rem 'Poppins', Arial, Helvetica, sans-serif;
    text-decoration: none;

    padding: 19px 32px;
    border: none;
    background-color: #fff;
    text-align: left;
    cursor: pointer;
    transition: .3s;

    &:hover{
    font: 700 1.3rem 'Poppins', Arial, Helvetica, sans-serif;
    }
`

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Status = styled.div`
    padding: 5px 10px;
    background-color: #2C974B;
    border-radius: 5px;
    color: white;
    font: 700 .7rem Arial;
    text-align: center;
`;

export const Techs = styled.div`
    color: ${colors.secondary100};
    font: 600 .8rem 'Poppins', Arial, Helvetica, sans-serif;
    margin-top: .3rem;
`;
