import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid lightgrey;
    width: 100%;
    height: 120px;
    margin-top: 44px;
    padding-bottom: 15px;
      & > span {
        margin-left: 25px;
        flex: 1;
      }
      & > h1 {
        font-size: 60px;
      font-family: Didot, serif;
      font-weight: bold;
      flex: 8;
      text-align: center;
      color: #000;
      }
`
const Span = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`

const Header = () => {
  return (
    <HeaderContainer>
      <span>SMARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <Span>98°</Span>
    </HeaderContainer>
  )
}

export default Header