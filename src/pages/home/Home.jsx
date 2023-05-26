import React from 'react'
import { Div } from './style'
import { ButtonAnimated } from '../../components/buttons/ButtonAnimated'
// import { Slide } from './slide/Slide'
import { Slide , About, History,Count,Choose ,Testimonial } from './export'
import { paralax } from '../../assets/exports/exportSlider'
export default function Home(){

  return (
    <Div photo ={paralax}>
      <Slide />
      <About />
      <History />
      <Count />
      <Choose />
      <Testimonial />
    </Div>
  )
}
