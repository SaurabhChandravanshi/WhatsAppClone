import React from 'react'
import LeftHeader from '../elements/LeftHeader'
import SearchBar from '../elements/SearchBar'
import UserListContainer from '../elements/UserListContainer'
import style from '/styles/leftContainer.module.styl'

export default function LeftContainer() {
  return (
    <div className={style.container}>
    <LeftHeader/>
    <SearchBar/>
    <UserListContainer/>
    </div>
  )
}