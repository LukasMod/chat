import React, { useState } from 'react';
import './styles.css';
import Message from './components/Message/Message'
import MessageForm from './components/MessageForm/MessageForm'

import db from './config'

export default function App() {

  const [message, setMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const messageObj = {
      user: 'Patryk',
      content: message,
      datetime: Date.now()
    }
    console.log("Message: ", messageObj)
    db.ref('/messages').push(messageObj)
    setMessage('')
  }


  const messages = [
    { id: 11, user: 'Patryk', content: 'Hej co tam', datetime: Date.now() },
    { id: 22, user: 'Ania', content: 'Hejjoooo', datetime: Date.now() },
    { id: 33, user: 'Patryk', content: 'Lubblin tutaj', datetime: Date.now() }];

  return (
    <div className="App">
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
      <MessageForm content={message.content} handleSubmit={handleSubmit}
        handleContentChange={setMessage} />
    </div>
  );
}
