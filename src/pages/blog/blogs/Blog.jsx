import {Div} from './style'
import { ItemImage,Paragraph } from '../../../components/exports/export'
import { blog1, blog2, blog3 , blog4,blog5,blog6 } from '../../../assets/exports/exportSlider'
import { Item } from './itemBlog/Item'
import React from 'react'

export  function Blog() {
  return (
    <Div>
        <ItemImage title ="Blog" />

        <div className="container">
            <Paragraph text ="Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!"/>
        
            <div className="contentWrapper">
                <div className="content">
                    <Item photo ={blog1}/>
                    <Item photo ={blog2}/>
                    <Item photo ={blog3}/>
                </div>
                <div className="content">
                    <Item photo ={blog4}/>
                    <Item photo ={blog5}/>
                    <Item photo ={blog6}/>
                </div> 
            </div>
        </div>
    </Div>
  )
}
