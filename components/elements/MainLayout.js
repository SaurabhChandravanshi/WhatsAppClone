import React from 'react'
import ChatContainer from './ChatContainer'
import ConversationContainer from './ConversationContainer'
import './CompStyles/Layout.module.styl';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function MainLayout() {
  const [windowWidth, setWindowWidth] = useState(0);
  const conversation = useSelector(store => store.conversation)
  const onWindowResize = () => {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
    return function () {
      window.removeEventListener('resize');
    }
  }, [])

  return (
    <>
    {
      
      windowWidth < 600 ? conversation.phone ? <ConversationContainer/> : <ChatContainer/> : (
        <div className='container'>
          <ChatContainer />
          <ConversationContainer />
        </div>
        )
    }
    </>
  )
}
