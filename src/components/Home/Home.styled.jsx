import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    width: 800px;
    background-color: #1f1d1d;
    margin: 50px auto;
    border-radius: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
    box-shadow: 0px 0px 20px 10px #ff6600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: 600;
    display: block;
    text-align: left;
    padding-top: 10px;
    color: #ff6600;
    
`;

export const Desc = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5em;
    display: block;
    text-align: center;
    padding: 10px 30px;
    color: #ffffff;
`;

export const LinkBox = styled.div`
    width: 800px;
    background-color: #f49d08;
    margin: 0 auto;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
`;

export const Link = styled(NavLink)`
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    display: block;
    padding: 15px 50px;
    margin-top: 20px;
    margin-bottom: 20px;

    border-radius: 10px;
    background-color: #1f1d1d;
    color: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
    :hover {
        background-color: #ff6600;
        color: #000000;
        box-shadow: 0px 0px 7px 2px #000000;
    }
`;