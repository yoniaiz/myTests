import  {generalConstants}  from '../constants'

export const firstAction = () => {
    return {
        type: generalConstants.FIRTS_ACTION || 'FIRST_ACTION'
    }
}