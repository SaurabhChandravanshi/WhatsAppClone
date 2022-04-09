import React from 'react'
import './CompStyles/Conversation.styl'
import ConversationHeader from './ConversationHeader'
import EmptyConversation from './EmptyConversation';
import Compose from './Compose'
import { useSelector } from 'react-redux'

export default function ConversationContainer() {
  const conversation = useSelector((store) => store.conversation)
  
  return (
    <>
      {
        <div className='conv'>
          {
            conversation.phone ? (
              <>
                <ConversationHeader title={conversation.phone} />
                <Compose phone={conversation.phone}  />
              </>
            ) : <EmptyConversation/>
          }
        </div>
      }
    </>
  )
}
