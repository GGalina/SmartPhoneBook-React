import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import backgroundGrey from '../../assets/background-grey.jpg';

export const Wrapper = styled.div`
    width: 100%;
    background-image: url(${backgroundGrey});
    background-size: cover;
    background-repeat: no-repeat;
    padding-left: 42px;
    position: absolute;
    bottom: 0;
    top: 65px;
    box-sizing: border-box;
`;

export const Container = styled.div`
    width: 500px;
`;

export const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: 600;
    display: block;
    text-align: left;
    padding-top: 30px;
    color: #25282c;
`;

export const Desc = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5em;
    display: block;
    color: #F2F2F2;
    padding-top: 30px;
    padding-bottom: 20px;
`;

export const LinkBox = styled.div`
    width: 500px;
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
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    display: block;
    padding: 10px 30px;
    margin-top: 20px;
    margin-bottom: 20px;

    border-radius: 10px;
    background-color: #25282c;
    color: #F2F2F2;
    border: none;
    outline: none;
    cursor: pointer;
    :hover {
        color: #25282c;
        background-color: #F2F2F2;
    }
`;