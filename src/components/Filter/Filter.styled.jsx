import styled from 'styled-components';

export const FilterArea = styled.div`
    padding-left: 40px;
`;

export const FilterDesc = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 500;
    font-size: 18px;
    color: #25282c;
    padding-bottom: 5px;
    padding-left: 5px;
`;

export const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    padding-left: 10px;
    width: 250px;
    height: 35px;
    border-radius: 10px;
    outline: none;
    border: none;
    box-shadow: 2px 2px 7px 0px #1f1d1d;
    :focus {
        border: 2px solid #55bb55;
    }
`;
