import React from 'react'
import LeftHeader from '../elements/LeftHeader'
import SearchBar from '../elements/SearchBar'
import UserListContainer from '../elements/UserListContainer'
import '/styles/leftContainer.module.styl'

export default function LeftContainer() {
  return (
    <div className='container'>
    <LeftHeader/>
    <SearchBar/>
    <UserListContainer/>
    </div>
  )
}