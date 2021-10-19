import React from 'react';
import './App.css';
import styled , {css} from "styled-components"

import { Header,Footer } from './components';


function App() {
  return (
    <Wrapper className="App">
      <Header>
        asd
      </Header>
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
    position: sticky;
    margin: 0;
    z-index:-9999;
    top:0;
    left:0;
    margin: 0;
    background-color: white;
`;