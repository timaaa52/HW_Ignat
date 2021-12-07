import React from 'react'
import wrapper from './Message.module.css'
import d from './Message.module.css'
import a from './Message.module.css'
import t from './Message.module.css'
import n from './Message.module.css'
import m from './Message.module.css'

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
                <div><img className={a.avatar} src={props.avatar} alt="avatar"/></div>
                <div className={d.dialog}>
                    <span className={n.name}>{props.name}</span>
                    <span className={m.mess}>{props.message}</span>
                    <span className={t.time}>{props.time}</span>
                </div>

            </div>
        </div>
    )
}

export default Message
