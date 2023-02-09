const initState = {
    themeId: 1,
}
type ActionType = {
    type: 'SET_THEME_ID',
    id: number
}

type initstate ={
    themeId:number
}
export const themeReducer = (state = initState, action: ActionType): initstate=> { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
          let stateCopy = {...state}
            stateCopy.themeId = action.id
            return stateCopy
        }


        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({type: 'SET_THEME_ID', id}) // fix any
