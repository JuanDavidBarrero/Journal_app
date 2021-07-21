/* 
notes: [],
active:null,
active: {
    id: 'fdjlafjdlajsla',
    title: '',
    body: '',
    imageUrl: '',
    date: 23749827843
}
*/

import { types } from "../types/types";

const initialState = {
    notes: [],
    active:null
}

export const notesReducer = (state = initialState, action) => {

    switch (action.type)  {

        case types.notesActive: return {
            ...state,
            active:{
                ...action.payload
            }
        }
    
        default: return state;
    }


}