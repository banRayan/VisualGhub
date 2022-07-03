import styled from "styled-components";
import { COLORS, FONTS } from '../../styles/themes/theme';

export const Container = styled.button`
    width: 100%;
    background-color: ${COLORS.TEXT_PRIMARY};
    color: ${COLORS.TEXT_SECONDARY};
    font: ${FONTS.TEXT_600} ${FONTS.MAIN};
    padding: 19px 32px;
    border: none;
    border-radius: 5px;
    text-align: left;
    cursor: pointer;
    transition: .3s;

    &:hover{
    /* font: ${FONTS.TEXT_MEDIUM_700} ${FONTS.MAIN}; */
    transform: translateX(15px);
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
    color: ${COLORS.PRIMARY_600};
    font: 600 .8rem ${FONTS.MAIN};
    margin-top: .3rem;
`;
