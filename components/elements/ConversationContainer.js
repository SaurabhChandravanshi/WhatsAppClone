import React from 'react'
import EmptyConversation from './EmptyConversation'
import './CompStyles/Conversation.styl'

export default function ConversationContainer() {
  return (
    <div className='conv'>
      <EmptyConversation />
    </div>
  )
}
