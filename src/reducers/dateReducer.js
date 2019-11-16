import { timeConstants } from "../constants";

const INITAL_STATE = {
    date : null,
    time : null
}

export default (state = INITAL_STATE , action) => {
    switch(action.type){
        case timeConstants.SUBMIT_TIME:
            return {
                ...state,
                date:action.date,
                time:action.time
            }
        default:
            return state;
    }
}