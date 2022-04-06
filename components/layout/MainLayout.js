import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

import style from '/styles/layout.module.styl';

export default function MainLayout() {
  return (
    <div className={style.container}>
    <LeftContainer/>
    <RightContainer/>
    </div>
  )
}
