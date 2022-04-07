import React from 'react'
import MainLayout from './elements/MainLayout'

export default function Layout({children}) {
  return (
    <html>
      <MainLayout/>
      <div>{children}</div>
    </html>
  )
}
