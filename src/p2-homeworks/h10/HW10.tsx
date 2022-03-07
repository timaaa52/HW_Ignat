import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppStoreType} from "./bll/store";
import {loadingAC, ReduceType} from "./bll/loadingReducer";
import s from './style.module.css'


function HW10() {
    // useSelector, useDispatch
    const state = useSelector<AppStoreType, ReduceType>(state => state.loading)
    const dispatch = useDispatch();
    // const loading = window.setTimeout(() => {
    //     dispatch(loadingAC(false))
    // }, 1000)

    const setLoading = () => {
        dispatch(loadingAC(true));
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1000)
        // dispatch
        // setTimeout

        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {state.isLoading
                ?
                <div>
                 что-то не получается вставить сss крутилку, не крутиться анимация....
                </div>
                :
                <div>
                    <SuperButton onClick={setLoading}>set loading...</SuperButton>
                </div>

            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
