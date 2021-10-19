import React, {useEffect} from 'react';
import styled , {css} from "styled-components"



const Footer = () => {
    return(
        <Wrapper>
            <FooterBox>
                asd
            </FooterBox>
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.div`
    width: 100%;
    /* height: 100%; */
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 0;
    background-color: white;
`;

const FooterBox = styled.div`
    width: 100%;
    height: 40px;

    background-color: #ddd;
    text-align: center;
`;