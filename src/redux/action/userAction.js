export const Fetch_Login_Success = 'Fetch_Login_Success'

export const doLogin = (res) => {
    return {
        type: Fetch_Login_Success,
        payload: res
    }
}