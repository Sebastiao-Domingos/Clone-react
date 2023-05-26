import {Div } from './style'
import Item from './item/Item'
import { img1 , img2 , img3 , img4 } from "../../../../assets/exports/exportSlider"
import { FaChevronLeft , FaChevronRight } from 'react-icons/fa'
import { useState , useEffect , useCallback, useRef  } from 'react';
export default function Slider() {
    const refScroll = useRef();
    const [ refBtn1 , refBtn2 ] = [ useRef() , useRef()];
    let positionX = 0;

    const handleSlider = useCallback( ( direction ) => {
        if( direction ) {
            if( positionX < 1036)
                positionX +=259;

        }else {
            if( positionX > 0 )
                positionX -=259;
        }

        changeColorButton( positionX );

        refScroll.current.scrollTo( { 
            top:0,
            left : positionX , 
            behavior : "smooth",
        })
    },[])


    function changeColorButton( typeBtn ){
        refBtn1.current.style.background= "#333333";
        refBtn2.current.style.background= "#333333";

        if( typeBtn === 1036 ) {
            refBtn2.current.style.background= "#c4c0c0";
        }else {
            if( typeBtn === 0 ){
                refBtn1.current.style.background='#c4c0c0';
            }
        }
    }
 
  return (
    <Div>
        <button onClick = { ()=> handleSlider(false)}  ref ={ refBtn1 }><FaChevronLeft /></button>
        
        <div className="container" ref ={ refScroll}>
            <div className="content">
                <div className="wrapper">
                    <Item photo ={ img1} 
                        year ="2018"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <Item photo ={ img2} 
                        top
                        topSet
                        left="26%"
                        year ="2015"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <Item photo ={ img3}
                        left ="51%" 
                        year ="2014"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <Item photo ={ img4} 
                        top
                        topSet
                        left="75.5%"
                        year ="2012"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />

                    <Item photo ={ img1} 
                        left="101%"
                        year ="2010"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <Item photo ={ img2} 
                        top
                        topSet
                        left="125.5%"
                        year ="2007"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <Item photo ={ img3}
                        left ="150%" 
                        year ="2004"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <Item photo ={ img4} 
                        top
                        topSet
                        left="175.5%"
                        year ="2002"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />


                    <div className ="contentRow">
                        <div className="square1"></div>
                        <div className="square2"></div>
                        <div className="square3"></div>
                        <div className="square4"></div>
                        <div className="square5"></div>
                        <div className="square6"></div>
                        <div className="square7"></div>
                        <div className="square8"></div>

                        <div className="row"></div>
                    </div>
                </div>
            </div>
        </div> 
        <button onClick = { ()=> handleSlider(true)}  ref ={ refBtn2 }><FaChevronRight /></button>
    </Div>
  )
}
