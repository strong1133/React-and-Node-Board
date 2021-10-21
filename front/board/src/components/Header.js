import React, {useEffect} from 'react';
import styled , {css} from "styled-components"


const Header = () =>{
    return(
        <Wrapper>
            <NavBox>
                네비박스
            </NavBox>
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    width: 100%;
    position: fixed;
    top:0;
    left:0;
    margin: 0 0 100px 0;
    background-color: white;
`;

const NavBox = styled.div`
    width: 100%;
    height: 40px;
    line-height:40px;
    background-color: wheat;
    text-align: center;
`;