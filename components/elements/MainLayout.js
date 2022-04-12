import React from 'react'
import ChatContainer from './ChatContainer'
import ConversationContainer from './ConversationContainer'
import './CompStyles/Layout.module.styl';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';

function MainLayout({conversation}) {
  const [windowWidth, setWindowWidth] = useState(0);
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
          <ConversationContainer conversation={Map(conversation)} />
        </div>
        )
    }
    </>
  )
}

const mapStateToProps = state => ({conversation:state.conversation})
export default connect(mapStateToProps)(MainLayout)
