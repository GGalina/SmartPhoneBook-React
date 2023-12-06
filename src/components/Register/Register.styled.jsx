import styled from 'styled-components';
import backgroundGrey from '../../assets/background-grey.jpg';

export const FormContainer = styled.div`
    width: 100%;
    background-image: url(${backgroundGrey});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    top: 65px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.form`
    width: 600px;
    background-color: #99a7b5;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 10px #484f56;
    padding: 20px 10px;
`;

export const FormTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: 600;
    display: block;
    text-align: center;
    padding-top: 10px;
    color: #25282c;
    margin: 0;
`;

export const InputBox = styled.div`
    width: 600px;
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
    color: #25282c;
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
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    display: block;
    padding: 15px 40px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
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