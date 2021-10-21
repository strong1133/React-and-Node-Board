import React from "react";
import styled from "styled-components";

// redux hook을 불러옵니다.
import {useDispatch, useSelector} from 'react-redux';

const UserInfo = (props) =>{
    const user_info = useSelector(state => state.user.user)

    console.log(user_info)

    return(
        <div>
            <h1>{user_info} </h1>
        </div>
    );
};

export default UserInfo;