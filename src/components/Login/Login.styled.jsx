import styled from 'styled-components';

export const FormContainer = styled.div`
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

export const FormTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: 600;
    display: block;
    text-align: center;
    padding-top: 10px;
    color: #ff6600;
`;

export const InputBox = styled.div`
    width: 800px;
    background-color: #f49d08;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    padding: 20px;
    display: flex;
    width: 550px;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    width: 400px;
    height: 35px;
    border-radius: 10px;
    outline: none;
    border: none;
    box-shadow: 2px 2px 7px 0px #1f1d1d;
    :focus {
        border: 2px solid #55bb55;
    }
`;

export const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    display: block;
    padding: 15px 40px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    background-color: #1f1d1d;
    color: #ffffff;
    border: 2px solid #ff6600;
    outline: none;
    cursor: pointer;
    :hover {
        background-color: #ff6600;
        color: #000000;
    }
`;