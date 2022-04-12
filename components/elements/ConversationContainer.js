import React from 'react'
import './CompStyles/Conversation.styl'
import ConversationHeader from './ConversationHeader'
import EmptyConversation from './EmptyConversation';
import Compose from './Compose'
import { useSelector } from 'react-redux'
import MessageContainer from './MessageContainer';
import { connect } from 'react-redux';
import { Map } from 'immutable';

export default function ConversationContainer({conversation}) {
  //const conversation = useSelector((store) => store.conversation)

  return (
    <>
      {
        <div className='conv'>
          {
            conversation.get('phone') ? (
              <>
                <ConversationHeader title={conversation.get('phone')} />
                <MessageContainer chatData={conversation}/>
                <Compose phone={conversation.get('phone')} conversation={conversation} />
              </>
            ) : <EmptyConversation/>
          }
        </div>
      }
    </>
  )
}
