const chat = (state = [], action) => {
  switch(action.type) {
    case'CREATE_CHAT':
      const chat = {body: action.body}
      const length = state.length
      const id =length === 0 ? 1 : state[length-1].id + 1
      return [...state, {id, ...chat}]
    case'DELETE_CHAT':
      return state
    default:
      return state
  }

}

export default chat