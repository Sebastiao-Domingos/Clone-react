import { ItemImage,Paragraph } from '../../../components/exports/export'
import {Div} from './style'
import Item from '../itemGrid/Item'
import { blog1, blog2, blog3 , blog4,blog5,blog6 } from '../../../assets/exports/exportSlider'
export function Grid2() {
  return (
    <Div>
        <ItemImage title ="Course Grid 3" />

        <div className="container">
            <Paragraph text ="Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!"/>
        
            <div className="contentWrapper">
                <Item photo ={blog1} title ="Engineering" />
                <Item photo ={blog2} title ="Hotel Management" />
                <Item photo ={blog3} title ="Biotechnology" />
                <Item photo ={blog4} title ="Medical Sciences" />
                <Item photo ={blog5} title ="Finance" />
                <Item photo ={blog6} title ="Fashion Designinng" />

            </div>
        </div>
    </Div>
  )
}
