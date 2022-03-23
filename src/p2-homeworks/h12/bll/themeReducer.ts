export type stateType = {
    theme: string
}

const initState = {
    theme: 'some',
};

export const themeReducer = (state: stateType = initState, action: any): stateType => { // fix any
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {
                ...state, 
                theme: action.payload.theme
            }
        }
        default: return state;
    }
};

const CHANGE_THEME = 'CHANGE_THEME';
type changeThemeCType = { 
    type: 'CHANGE_THEME'
    payload: {
        theme: string
    }
}
export const changeThemeC = (theme: string): changeThemeCType => {
    return {
        type: CHANGE_THEME,
        payload: {
            theme,
        }
    }
}; // fix any