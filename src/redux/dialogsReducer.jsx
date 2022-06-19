const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state
    case SEND_MESSAGE:
      let maxId = 0;
      state.dialogs.forEach(post => maxId = Math.max(post.id, maxId))

      let newMessage = {
        id: ++maxId,
        message: state.newMessageBody
      }
      state.messages.push(newMessage)
      state.newMessageBody = ''
      return state
    default:
      return state
  }
}

export const updateNewMessageBody = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export default dialogsReducer