import React from 'react'
import MessageItem from './MessageItem'

export default function MessageContainer({chatData}) {
  return (
    <div className='msgContainer'>
        {
            chatData.conversation.map((e, index) => {
                return (
                    <MessageItem  item={e} key={index}/>
                )
            })
        }
    </div>
  )
}
