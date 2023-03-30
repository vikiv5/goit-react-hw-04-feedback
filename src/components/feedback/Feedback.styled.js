import styled from "styled-components";

export const BoxBtn = styled.ul`
    list-style: none;
    gap:10px;
    width:600px;
    margin: 0;
    padding-left: 0;
    display: flex;
    justify-content: center;
    & li:not(:last-child){
        margin-right: 30px;
    }
`;
export const Button = styled.button`
    min-width: 100px;
    height: 50px;
    padding: 5px;
    border: 1px solid grey;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    color: white;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        transform: scale(1.05);
    }
`;