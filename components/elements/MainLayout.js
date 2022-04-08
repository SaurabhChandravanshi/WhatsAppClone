import React from 'react'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

import './Layout.module.styl';

export default function MainLayout() {
  return (
    <div className='container'>
    <LeftContainer/>
    <RightContainer/>
    </div>
  )
}
