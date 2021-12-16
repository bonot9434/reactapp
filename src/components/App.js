import React, {useReducer, useState} from 'react'
import '../App.css';
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [body, setBody] = useState('')

  const addChat = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_CHAT',
      body
    })
  }


  console.log({state})

  return (
    <div>
      <form>
        <label>本文</label>
        <input id="formChat" value={body} onChange={ e => setBody(e.target.value)}/>
        <button onClick={addChat}>送信</button>
      </form>
      <h4>内容</h4>
      {
        state.map(chat => (
          <div className="body">
            <h5>{chat.id}</h5>
            <h5>{chat.body}</h5>
            <button type="button" className="btn">削除</button>
          </div>
        ))
      }
    </div>
  )
}

export default App;
