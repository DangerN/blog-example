import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, Button, Input, Card, Form} from 'react-bootstrap'

import whatever from './appState'

function App() {
  const [state, dispatch] = whatever()
  const [postField, setPostField] = useState("")

  const handleNewPost = event => {
    event.preventDefault()
    dispatch({type: 'addPost', post: postField})
    setPostField("")
  }

  const handlePostField = event => {
    setPostField(event.target.value)
  }

  const displayPosts = () => {
    return state.posts.map((post, i)=>{
      return <div key={i}>{post}</div>
    })
  }

  return (
    <div className="App">
      <Container>
        <Form onSubmit={handleNewPost}>
          <Form.Control onChange={handlePostField} value={postField} type="text" placeholder="post text"/>
          <Button type="submit">Post</Button>
        </Form>
        {displayPosts()}
      </Container>
    </div>
  );
}

export default App;
