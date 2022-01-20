import * as actionType from './ActionTypes'

export const ACTION_HOSPETIAL_LOGIN= {
    type : actionType.HOSPETIAL_LOGIN,
    payload : {       
        token : undefined,
        hospetalid: undefined
    }
}
export const ACTION_HOSPETIAL_LOGOUT = {
    type : actionType.HOSPETIAL_LOGOUT
}

export const ACTION_HOSPETIAL_UPDATE_TOKEN = {
    type : actionType.HOSPETIAL_UPDATE_TOKEN,
    payload : {        
        token : undefined
    }
}