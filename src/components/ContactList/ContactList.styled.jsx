import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #6f7a84;
    padding: 10px 40px;
    margin-top: 20px;
`;

export const List = styled.ul`
    list-style-type: '☎';
`;

export const ListItem = styled.li`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    padding: 10px;
    color: #F2F2F2;
`;

export const DeleteBtn = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    display: inline-block;
    padding: 10px 15px;
    margin-left: 15px;
    border-radius: 10px;
    color: #F2F2F2;
    background-color: #25282c;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    right: 25px;
    :hover {
        background-color: #fe1101;
    }
`;