import React from 'react'
import type { FC } from 'react'
import Header from '~/layout/header'
import Footer from '~/layout/footer'
import type { GlogalLayoutProps } from '~/typescript/global'

const GlobalLayout: FC<GlogalLayoutProps> = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{ children }</main>
      <Footer/>
    </>
  )
}

export default GlobalLayout