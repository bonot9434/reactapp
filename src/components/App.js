import React, {useReducer, useState} from 'react'
import '../App.css'
import Chat from './Chat'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')
  const [body, setBody] = useState('')

  const addChat = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_CHAT',
      name,
      body
    })
    setName('')
    setBody('')
  }

  return (
    <div>
      <form>
        <input id="userName" value={name} onChange={ e => setName(e.target.value)}/>
        <input id="formChat" value={body} onChange={ e => setBody(e.target.value)}/>
        <button onClick={addChat}>送信</button>
      </form>
      <h4>内容</h4>
      { state.map((chat, index) => (<Chat key = {index} chat = {chat} dispatch = {dispatch} />))}
    </div>
  )
}

export default App;
