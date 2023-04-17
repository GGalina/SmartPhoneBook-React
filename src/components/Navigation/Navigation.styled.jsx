import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.div`
    background-color: #1f1d1d;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #ff6600;
`;

export const Box = styled.div`
    background-color: #1f1d1d;
    display: flex;
    gap: 30px;
`;

export const Link = styled(NavLink)`
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    display: block;
    padding: 15px 40px;
    border-radius: 10px;
    background-color: #1f1d1d;
    color: #ffffff;
    border: 2px solid #ff6600;
    outline: none;
    cursor: pointer;
    :hover,
    :focus {
        background-color: #ff6600;
        color: #000000;
    }
`;