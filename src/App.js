import React from 'react';
import './styles.css';
import Message from './components/Message/index'

export default function App() {

  const messages = [
    { id: 12, user: 'Patryk', content: 'Hej co tam', datetime: Date.now() },
    { id: 24, user: 'Ania', content: 'Hejjoooo', datetime: Date.now() },
    { id: 67, user: 'Patryk', content: 'Lubblin tutaj', datetime: Date.now() }];

  return (
    <div className="App">
      {messages.map(message => (
        <div><Message key={message.id} message={message} /></div>
      ))}
    </div>
  );
}
