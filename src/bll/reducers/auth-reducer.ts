type actionsType = any
type initialStateType = {}

const initialState = {}

export const authReducer = (state: initialStateType = initialState, action: actionsType) => {
    switch (action.type) {
        case 'xxx': {
            return state
        }
        default:{
            return state
        }
    }
}