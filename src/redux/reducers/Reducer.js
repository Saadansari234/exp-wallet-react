const initialState = {
    logged: false
}



export const loginInfo = (state = initialState.logged, action) => {
    switch (action.type) {
        case "SIGNIN": return state = true
        case "SIGNOUT": return state = false
        default: return state
    }
}