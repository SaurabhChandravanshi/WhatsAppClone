import React from 'react'
import LeftHeader from './LeftHeader'
import SearchBar from './SearchBar'
import UserListContainer from './UserListContainer'
import './LeftContainer.module.styl'

export default function LeftContainer() {
  return (
    <div className='container'>
    <LeftHeader/>
    <SearchBar/>
    <UserListContainer/>
    </div>
  )
}