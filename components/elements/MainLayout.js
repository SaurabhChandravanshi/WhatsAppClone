import React from 'react'
import ChatContainer from './ChatContainer'
import ConversationContainer from './ConversationContainer'
import './CompStyles/Layout.module.styl';

export default function MainLayout() {

  return (
    <div className='container'>
    <ChatContainer/>
    <ConversationContainer/>
    </div>
  )
}
