import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.div`
    background-color: #99a7b5;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #484f56;
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const Link = styled(NavLink)`
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    font-size: 20px;
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