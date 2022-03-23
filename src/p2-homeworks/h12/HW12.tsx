import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { stateType, changeThemeC } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const {theme} = useSelector<AppStoreType, stateType>(state => state.theme); // useSelector
    const dispatch = useDispatch();
    const onChangeCallback = (value: string) => {
        console.log(value);
        dispatch(changeThemeC(value));
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <hr/>

            <div>
            <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />
            </div>
        </div>

    
    );
}

export default HW12;
