import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string// need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = name.trim() === '' ? s.error : ''; // need to fix with (?:)

    return (
        <div>
            <input value={name} onKeyPress={(e) => onKeyPressHandler(e)} onChange={(e) => setNameCallback(e)} className={inputClass}/>
            <span>{error}</span>
            <button className={s.someClass} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
