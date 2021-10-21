import React from 'react';
import './App.css';
import styled , {css} from "styled-components"

import { Header,Footer, UserInfo } from './components';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  return (
    <Wrapper className="App">
      <Header>
        asd
      </Header>
      <Body>
        <UserInfo/>
      </Body>
      <Footer>
        asd
      </Footer>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
    width: 100vw;
    height:100vh;
  
    top:0;
    left:0;
    margin: 0;
    background-color: white;
`;

const Body = styled.div`
  margin-top: 50px;
  width: 100%;
`