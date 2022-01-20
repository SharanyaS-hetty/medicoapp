import * as actionType from './ActionTypes'

export const ACTION_PATIENT_LOGIN= {
    type : actionType.PATIENT_LOGIN,
    payload : {       
        token : undefined,
        patientid: undefined
    }
}
export const ACTION_PATIENT_LOGOUT = {
    type : actionType.PATIENT_LOGOUT
}

export const ACTION_PATIENT_UPDATE_TOKEN = {
    type : actionType.PATIENT_UPDATE_TOKEN,
    payload : {        
        token : undefined
    }
}