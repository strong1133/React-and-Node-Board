import React from 'react';
import styled from 'styled-components';

const Header =() => {
    return(
        <Wrapper>
            <NavBox>
                <h2>Header</h2>
                <Title>Header</Title>
                <h2>Header</h2>
            </NavBox>
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    line-height:50px;
    background-color: cadetblue;
    position: sticky;
    margin: 0;
`;

const NavBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between ;
`
const Title = styled.h2`
    margin:0;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;


`;