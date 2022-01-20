import * as actionType from '../ActionTypes'

export default function PatientReducer(state={},action)
{
    switch(action.type)
    {
        case actionType.PATIENT_LOGIN: return {
                                ...state, loginstatus:true,
                                token : action.payload.token,
                               patientid : action.payload.patientid
                                }
        case actionType.PATIENT_LOGOUT: return {
                                ...state, loginstatus:false,
                                token : undefined,
                                patientid : undefined
                            }
        case actionType.PATIENT_UPDATE_TOKEN: return {
                            ...state,token : action.payload.token
                            }          
        default: return state                                
    }
}