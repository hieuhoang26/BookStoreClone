
import { Fetch_Login_Success } from '../action/userAction'

const INITIAL_STATE = {
    account: {
        id: '',
        username: '',
        role: '',
        token: '',
        refresh_token: '',
    },
    isAuthen: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Fetch_Login_Success:
            console.log(action)
            return {
                ...state, account: {
                    id: action?.payload?.id,
                    username: action?.payload?.username,
                    role: action?.payload?.role,
                    token: action?.payload?.access_token,
                    refresh_token: action?.payload?.refresh_token,
                },
                isAuthen: true
            }
        default: return state;
    }
};

export default userReducer;