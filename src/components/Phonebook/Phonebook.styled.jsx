import styled from 'styled-components';
import backgroundGrey from '../../assets/background-grey.jpg';

export const Container = styled.div`
    background-color: #99a7b5;
    margin: 0 auto;
    padding-bottom: 30px;
`;

export const Image = styled.div`
    width: 100%;
    height: 50px;
    background-image: url(${backgroundGrey}); 
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
`;

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: 600;
    display: block;
    text-align: left;
    padding-top: 10px;
    color: #25282c;
    text-align: center;
    padding: 20px 0;
`;

export const SubTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    text-align: center;
    color: #25282c;
    padding: 20px 0;
`;