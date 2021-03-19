import {updateContactFunc} from "../utils/utils"

const ADD = "ADD"
const UPDATE = "UPDATE"

let initialState = {
    contacts: [
        {id: 1, username: "Alex Smith", phone: "0939199372", img: "https://picsum.photos/200"},
        {id: 2, username: "Bread Stone", phone: "0939199373", img: "https://picsum.photos/200"},
        {id: 3, username: "Cindy Snow", phone: "0939199374", img: "https://picsum.photos/200"},
        {id: 4, username: "Daddy Doggy", phone: "0939199375", img: "https://picsum.photos/200"},
    ]
}




const contactReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    {
                        id: Date.now(),
                        ...action.object,
                        img: "https://picsum.photos/200",
                    }]
            };
        case UPDATE:
            return {
                ...state,
                contacts: updateContactFunc(state.contacts, action.id, action.object)
            }
        default:
            return state;
    }
}

export const addContactAction = (object) => ({type: ADD, object})
export const updateContactAction = (object, id) => ({type: UPDATE, object, id})



export const contactFunc = (contactObject, id) => {
    return async (dispatch) => {
        try {
            if(id && id !== null ){
                await dispatch(updateContactAction(contactObject, id))
            }else{
                await dispatch(addContactAction(contactObject))
            }
        }catch (e) {
            console.log(e)
        }
    }
}


export default contactReducer