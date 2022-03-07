export type ReduceType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingACType): ReduceType => { // fix any
    switch (action.type) {
        case "LOADING": {
            return action.payload.isloading ? {...state, isLoading: true} : {...state, isLoading: false};
        }
        default: return state
    }
}

type loadingACType = {
    type: 'LOADING',
    payload: {
        isloading: boolean
    }
}

export const loadingAC = (isloading: boolean): loadingACType => {
    return {
        type: "LOADING",
        payload: {
            isloading
        }
    }
} // fix any