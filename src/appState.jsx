import React, {useReducer} from 'react'

export default () => {
  const initialState = {
    posts: []
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'addPost':
        let newPostsList = state.posts
        newPostsList.push(action.post)
        return {...state, posts: newPostsList}
      default:
        throw new Error("bad action type")
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch]
}
