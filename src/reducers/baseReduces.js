import { generalConstants } from "../constants";

const INITAL_STATE = {
    firstAction : null
}

export default (state = INITAL_STATE , action) => {
    switch(action.type){
        case generalConstants.FIRTS_ACTION:
            return {
                ...state,
                firstAction:true
            }
        default:
            return state;
    }
}