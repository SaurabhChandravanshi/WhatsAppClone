import React from 'react'
import style from '/styles/searchBar.module.styl'

export default function SearchBar() {
  return (
    <input className={style.searchBar} placeholder='Search or start a new chat'/>
  )
}
