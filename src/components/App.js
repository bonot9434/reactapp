import React, {useReducer, useState} from 'react'
import '../App.css'
import Chat from './Chat'
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
    setBody('')
  }

  return (
    <div>
      <form>
        <label>本文</label>
        <input id="formChat" value={body} onChange={ e => setBody(e.target.value)}/>
        <button onClick={addChat}>送信</button>
      </form>
      <h4>内容</h4>
      { state.map((chat, index) => (<Chat key = {index} chat = {chat} dispatch = {dispatch} />))}
    </div>
  )
}

export default App;
