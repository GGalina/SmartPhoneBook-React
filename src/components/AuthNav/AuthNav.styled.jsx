import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const Link = styled(NavLink)`
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    display: block;
    padding: 10px 20px;
    color: #25282c;
    outline: none;
    cursor: pointer;
    :hover,
    &.active {
        color: #F2F2F2;
    }
`;