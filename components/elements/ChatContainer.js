import React from 'react'
import ChatHeader from './ChatHeader'
import SearchBar from './SearchBar'
import ChatItemContainer from './ChatItemContainer'
import './ChatContainer.styl'

export default function LeftContainer() {
  return (
    <div className='chatContainer'>
    <ChatHeader/>
    <SearchBar/>
    <ChatItemContainer/>
    </div>
  )
}