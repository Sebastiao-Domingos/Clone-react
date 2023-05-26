import { Div } from './style'
import { ItemImage,Info  } from './export'
import { Testimonial,About} from '../home/export'
import React from 'react'

export default function AboutUs() {
  return (
    <Div>
      <ItemImage  title ="About Us"/>
      <About color = "#F2F3F5" />
      <Info />
      <Testimonial />
    </Div>
  )
}
