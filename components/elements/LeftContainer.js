import React from 'react'
import LeftHeader from './LeftHeader'
import SearchBar from './SearchBar'
import UserListContainer from './UserListContainer'
import './LeftContainer.styl'

export default function LeftContainer() {
  return (
    <div className='leftContainer'>
    <LeftHeader/>
    <SearchBar/>
    <UserListContainer/>
    </div>
  )
}