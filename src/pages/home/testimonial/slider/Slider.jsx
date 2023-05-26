import {Div} from './style'
import { FaChevronRight ,FaChevronLeft } from 'react-icons/fa'
import React,{ useRef ,useEffect , useState,useCallback } from 'react'
import { Item } from './item/Item'
import { test1, test2,test3 } from '../../../../assets/exports/exportSlider'

export function Slider() {
    const [ testimonials , setTestimonials ] = useState([
        { photo : test1 , name :'James Feernando' , title:'Wonderful Support' ,info:'They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.'},
        { photo : test2 , name :'Jacques Philips' , title:'Awesome Services' ,info:'Explain to you how all this mistakes idea of denouncing pleasure and praising pain was born and I will give you completed.'},
        { photo : test3 , name :'Venanda Mercy' , title:'Great & TAlented Team' ,info:'The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure.'},
        { photo : test1 , name :'James Feernando' , title:'Wonderful Support' ,info:'They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.'},
        { photo : test2 , name :'Jacques Philips' , title:'Awesome Services' ,info:'Explain to you how all this mistakes idea of denouncing pleasure and praising pain was born and I will give you completed.'},
        { photo : test3 , name :'Venanda Mercy' , title:'Great & TAlented Team' ,info:'The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure.'}
    ])
    const refScroll = useRef();
    let  positionX = 0 ;

    const handleScroll = useCallback( ( direction ) => {
        if( direction ) {
            if( positionX < 6000)
                positionX +=1200 ;
        }else {
            if( positionX > 0 )
                positionX -=1200 ;
        }

        refScroll.current.scrollTo({
            top:0,
            left:positionX,
            behavior:"smooth"
        })
    },[]);

  return (
    <Div>
        <div className="container">

            <button onClick = { () => handleScroll(false) }> <FaChevronLeft /></button>
            <div className="contentWrapper" ref= { refScroll }>
                <div className="wrapper">
                    { testimonials.map( ( testimonial , index) => (
                        <Item 
                            photo ={ testimonial.photo}
                            name ={ testimonial.name}
                            title ={ testimonial.title}
                            info ={ testimonial.info }
                            index ={ index }
                        />
                    ))}
                    
                </div>
            </div>
            <button onClick = { () => handleScroll(true) }><FaChevronRight /></button>
        </div>
    </Div>
  )
}
