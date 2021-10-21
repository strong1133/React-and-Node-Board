import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SET_USER = 'SET_USER';
const GET_USEr = 'GET_USER'


const setUser = createAction(SET_USER, (user) => ({user}));

const getUser = createAction(GET_USER, (user) => ({user}));

const initialState = {
    user: '정석진',
    isLogin: true
}


export default handleActions({
    [SET_USER]: (state, action) => produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.isLogin = true
    }),
    [GET_USER]: (state, action) => produce(state, (draft) => {
        return state;
    }),


}, initialState)

const actionsCreators = {
    getUser,
    setUser
}

export { actionsCreators }