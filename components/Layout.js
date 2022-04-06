import React from 'react'
import MainLayout from './layout/MainLayout'

export default function Layout({children}) {
  return (
    <html>
      <MainLayout/>
      <div>{children}</div>
    </html>
  )
}
