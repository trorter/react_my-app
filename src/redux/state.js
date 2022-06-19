import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)

    this._callSubscriber()
  }
}

export default store
window.store = store