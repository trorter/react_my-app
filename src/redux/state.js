const EDIT_MESSAGE = 'EDIT-MESSAGE';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const addPostActionCreator = () => ({type: ADD_POST})

export const editMessageActionCreator = (text) => ({
    type: EDIT_MESSAGE,
    message: text
  })

export const updateNewMessageBody = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'It\'s my fist post', likesCount: '100'},
        {id: 2, message: 'Hi! How are you?', likesCount: '11'},
        {id: 3, message: 'Stub / mock post', likesCount: '12'},
        {id: 4, message: 'NEW ONE', likesCount: '22'}
      ],
      message: ''
    },
    dialogPage: {
      dialogs: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Nick'},
        {id: 3, name: 'Sally'},
        {id: 4, name: 'Sarah'},
      ],
      messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'How is your studying?'}
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('Mock')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch (action) {
    if (action.type === ADD_POST) {
      let maxId = 0;
      this._state.profilePage.posts.forEach(post => maxId = Math.max(post.id, maxId))

      let newPost = {
        id: ++maxId,
        message: this._state.profilePage.message,
        likesCount: '0'
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.message = ''

      this._callSubscriber()

    } else if (action.type === EDIT_MESSAGE) {
      this._state.profilePage.message = action.message
      this._callSubscriber()

    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogPage.newMessageBody = action.body
      this._callSubscriber()

    } else if (action.type === SEND_MESSAGE) {
      let maxId = 0;
      this._state.profilePage.posts.forEach(post => maxId = Math.max(post.id, maxId))

      let newMessage = {
        id: ++maxId,
        message: this._state.dialogPage.newMessageBody
      }
      this._state.dialogPage.messages.push(newMessage)
      this._state.dialogPage.newMessageBody = ''

      this._callSubscriber()
    }
  }
}

export default store
window.store = store