import React from 'react'
import './CompStyles/MessageItem.styl'

export default function MessageItem({item}) {
  return (
    <div className='messageContainer messageOut'>
        <div className='messageBox'>
            <span>{item.message}</span>
        </div>
        <svg viewBox="0 0 8 13" width="8" height="13" className=""><path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path><path fill="#d9fdd3" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg>
    </div>
  )
}