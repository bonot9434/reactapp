import React from 'react'

const Chat = ({ dispatch, chat }) => {
  const id = chat.id
  const handleClickDeleteButton = () => {
    dispatch({type: 'DELETE_CHAT', id})
  }
  return (
    <div className="body">
      <h5>{id}</h5>
      <h5>{chat.name}</h5>
      <h5>{chat.body}</h5>
      <button type="button" className="btn" onClick={handleClickDeleteButton}>削除</button>
    </div>
  )
}

export default Chat