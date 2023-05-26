import {Div} from './style'
import { Title2 , Paragraph } from '../../../components/exports/export'
import {Slider } from './slider/Slider'
import Log from './logs/Log'
import React from 'react'

export default function Testimonial() {
  return (
    <Div>
        <Title2 text="Testimonials"/>
        <Paragraph 
            text ="Lorem ipsum dolor sit aet, consectetur adipisicing lit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Slider />
    </Div>
  )
}
