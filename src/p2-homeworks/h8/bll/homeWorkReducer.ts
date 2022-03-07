import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: {type: string, payload: string | number}): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            let copyState = [...state];
            const sortFn = (a: UserType, b: UserType) => a.name > b.name ? 1 : -1;
            if(action.payload === 'up') return copyState.sort(sortFn);
            if(action.payload === 'down') return copyState.sort(sortFn).reverse();
            return state;
         }
        case 'check': {
            return state.filter( u => u.age > 18);
        }
        default: return state
    }
}