import React from 'react'
import wrapper from './Message.module.css'
import s from './Message.module.css'

type MassagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MassagePropsType) {
    return (
        <div>
            <div className={wrapper.message}>
                <div><img className={s.avatar} src={props.avatar} alt="avatar"/></div>
                <div className={s.dialog}>
                    <span className={s.name}>{props.name}</span>
                    <span className={s.mess}>{props.message}</span>
                    <span className={s.time}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
