import styled from 'styled-components';

export const Container = styled.div`
    background-color: #1f1d1d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const Welcome = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: 400;
    display: block;
    text-align: center;
    color: #ff6600;
    margin: 0;
`;

export const Button = styled.button`
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