const EDIT_MESSAGE = 'EDIT-MESSAGE';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let maxId = 0;
      state.posts.forEach(post => maxId = Math.max(post.id, maxId))

      let newPost = {
        id: ++maxId,
        message: state.message,
        likesCount: '0'
      }
      state.posts.push(newPost)
      state.message = ''
      return state
    case EDIT_MESSAGE:
      state.message = action.message
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const editMessageActionCreator = (text) => ({
  type: EDIT_MESSAGE,
  message: text
})

export default profileReducer