import React from 'react'
import { useState } from 'react'
import { requestApi } from './api/RequestApi'

export const Request = () => {
    const [requestStat, setRequestStat] = useState('');
    const [status, setStatus] = useState(false)

    const btnSubmitHandler = () => {
        requestApi.checkPost(status)
        .then(res => setRequestStat(res.data.info))
        .catch(err => setRequestStat(err.message))
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.checked)
    }

  return (
    <div>
        <hr />
        <div>
            <span>
                homeworks: 13
            </span>
        </div>
        <button onClick={btnSubmitHandler}>Submit</button>
        <input type="checkbox" checked={status} onChange={onChangeHandler}/>
        <p>{requestStat}</p>
        <hr />
    </div>
  )
}
