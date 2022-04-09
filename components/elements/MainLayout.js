import React from 'react'
import ChatContainer from './ChatContainer'
import ConversationContainer from './ConversationContainer'
import './Layout.module.styl';

export default function MainLayout() {

  return (
    <div className='container'>
    <ChatContainer/>
    <ConversationContainer/>
    </div>
  )
}
