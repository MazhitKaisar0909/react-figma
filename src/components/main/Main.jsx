import React from 'react'
import Contact from '../contact'
import { StyledMain } from './styled'
import ProductList from '../productList'
import MiniBoxes from '../miniBoxes'
import Moon from '../animationMoon/Moon'
import Hero from '../hero'


const Main = () => {
  return (
    <StyledMain>
      <Hero/>
      <ProductList/>
      <MiniBoxes/>
      {/* <Moon /> */}
      <Contact />
    </StyledMain>
  )
}

export default Main