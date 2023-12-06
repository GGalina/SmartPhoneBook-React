import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Welcome = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 600;
    display: block;
    text-align: center;
    padding-top: 10px;
    color: #25282c;
    margin: 0;
`;

export const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    display: block;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #25282c;
    color: #F2F2F2;
    border: 1px solid #25282c;
    outline: none;
    cursor: pointer;
    :hover {
        background-color: #F2F2F2;
        border: 1px solid #F2F2F2;
        color: #25282c;
    }
`;