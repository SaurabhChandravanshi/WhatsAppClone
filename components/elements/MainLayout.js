import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

import style from './Layout.module.styl';

export default function MainLayout() {
  console.log(style.container)
  return (
    <div className='container'>
    <LeftContainer/>
    <RightContainer/>
    </div>
  )
}
