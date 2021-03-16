const LOG = 'LOG'

let initialState = {
    login: false,
    username: null,
}




const loginReducer = (state = initialState , action) => {
    switch (action.type) {
        case LOG:
            return {
                ...state,
                login: action.value,
                username: action.username ? action.username : null
            };
        default:
            return state;
    }
}


export const logAction = (value, username) => ({type: LOG, value, username})

export const logFunc = (value, username) => {
    return async (dispatch) => {
        try {
            await dispatch(logAction(value, username))
        }catch (e) {
            console.log(e)
        }
    }
}


export default loginReducer;