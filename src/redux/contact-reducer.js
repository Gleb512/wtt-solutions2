import {updateContactFunc} from "../utils/utils";

const ADD = 'ADD'
const UPDATE = 'UPDATE'

let initialState = {
    contacts: [
        {id: 1, username: 'Alex Smith', img: 'https://picsum.photos/200', phone: '0939199372'},
        {id: 2, username: 'Bread Stone', img: 'https://picsum.photos/200', phone: '0939199373'},
        {id: 3, username: 'Cindy Snow', img: 'https://picsum.photos/200', phone: '0939199374'},
        {id: 4, username: 'Daddy Doggy', img: 'https://picsum.photos/200', phone: '0939199375'},
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
                        ...action.object,
                        id: Date.now(),
                        img: 'https://picsum.photos/200',
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


export default contactReducer;