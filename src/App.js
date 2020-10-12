import React, { useState, useEffect } from 'react';
import './styles.css';
import Message from './components/Message/Message'
import MessageForm from './components/MessageForm/MessageForm'

import db from './config'

export default function App() {

  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([])

  useEffect(() => {
    db.ref('/messages').on('value', (snapshot) => {
      const fbMessages = snapshot.val();
      const convertedMessages = Object.entries(fbMessages || {}).map(([id, message]) => ({ ...message, id }));
      setMessages(convertedMessages)
      console.log(convertedMessages)

    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const messageObj = {
      user: 'Patryk',
      content: newMessage,
      datetime: Date.now()
    }
    if (newMessage) {
      db.ref('/messages').push(messageObj)
    }
    console.log("Message: ", messageObj)

    setNewMessage('')
  }


  // const messages = [
  //   { id: 11, user: 'Patryk', content: 'Hej co tam', datetime: Date.now() },
  //   { id: 22, user: 'Ania', content: 'Hejjoooo', datetime: Date.now() },
  //   { id: 33, user: 'Patryk', content: 'Lubblin tutaj', datetime: Date.now() }];

  return (
    <div className="App">
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
      <MessageForm content={newMessage.content} handleSubmit={handleSubmit}
        handleContentChange={setNewMessage} />
    </div>
  );
}
