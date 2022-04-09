import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ChatItem from './ChatItem';
import './ChatItem.styl'
export default function UserListContainer() {

  const chatData = useSelector(store => store.chat);
  const disptach = useDispatch();


  useEffect(()=> {
    disptach({type:'GET_CHAT'})
  }, [])

  return (
    <div className='chatItemContainer'>
      {
        chatData.map((e) => {
          return (
            <ChatItem key={e.id} chatData={e}/>
          )
        })
      }
    </div>
  )
}
