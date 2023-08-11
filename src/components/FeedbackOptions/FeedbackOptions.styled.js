import styled from "@emotion/styled";

export const ButtonList = styled.div`
text-align: center;`

export const Button = styled.button`
 width: 80px;
  height: 40px;
  border-radius: 5px;
  padding: 5px 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  border: none;
  text-align: center;
  :not(:last-child) {margin-right: 15px;}
  :hover {scale: 1.05; 
    font-weight: 600}`