import React from 'react'
import ImgLaptop from '../../assets/main/laptop.png'
import { BigWordsH1, BigWordsWraper, BigNumberH1 } from './styled'

const Laptop = () => {
  return (
    <div>
      <BigWordsWraper>
        <BigWordsH1>
          WHY YOU <br /> SHOULD<br /> CHOOSE<br /> US?
        </BigWordsH1>
        <BigNumberH1>01</BigNumberH1>
      </BigWordsWraper>
      {/* < ImgLaptop /> */}
    </div>
  )
}

export default Laptop