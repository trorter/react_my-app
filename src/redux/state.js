

let state = {
  profilePage : {
    posts: [
      {id: 1, message: 'It\'s my fist post', likesCount: '100'},
      {id: 2, message: 'Hi! How are you?', likesCount: '11'},
      {id: 3, message: 'Stub / mock post', likesCount: '12'},
      {id: 4, message: 'NEW ONE', likesCount: '22'}
    ]
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
    ]
  }
}

let addPost = (postMessage) => {
  let maxId = 0;
  state.profilePage.posts.forEach(post => maxId = Math.max(post.id, maxId))

  let newPost = {
    id: ++maxId,
    message: postMessage,
    likesCount: '0'
  }
  state.profilePage.posts.push(newPost)
}

state.profilePage.posts.addPost = addPost;

export default state