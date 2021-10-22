import './App.css';
import React from 'react'
import styled from "styled-components"

import { Header,Footer, Boards } from './components';


function App() {
  return (
    <Wrapper>
      <Header/>
      <Footer/>
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