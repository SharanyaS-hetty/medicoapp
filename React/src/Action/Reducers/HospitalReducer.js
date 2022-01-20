import * as actionType from '../ActionTypes'

export default function HospitalReducer(state={},action)
{
    switch(action.type)
    {
        case actionType.HOSPETIAL_LOGIN: return {
                                ...state, loginstatus:true,
                                token : action.payload.token,
                                hospitalid : action.payload.hospitalid
                                }
        case actionType.HOSPETIAL_LOGOUT: return {
                                ...state, loginstatus:false,
                                token : undefined,
                                hospitalid: undefined
                            }
        case actionType.HOSPETIAL_UPDATE_TOKEN: return {
                            ...state,token : action.payload.token
                            }          
        default: return state                                
    }
}