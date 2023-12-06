import styled from 'styled-components';

export const FormContainer = styled.div`
    background-color: #484f56;
    display: flex;
    justify-content: center;
    padding: 20px;
`;

export const Form = styled.form`
    width: 600px;
    background-color: #99a7b5;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 10px #484f56;
    padding: 20px 10px;
`;

export const FormTitle = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    padding: 10px;
    display: flex;
    width: 600px;
    justify-content: space-between;
    align-items: flex-end;
    color: #F2F2F2;
`;

export const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    padding-left: 10px;
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
    margin: 20px auto;
    :hover {
        color: #25282c;
        background-color: #F2F2F2;
    }
`;