import { Div } from './style'
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa'
import { useState , useCallback , useRef ,useEffect  } from 'react';
import { ItemSlide } from './item/ItemSlide'
import { photo1 , photo2 , photo3 } from '../../../assets/exports/exportSlider'

export function Slide() {
    const ref = useRef();
    const  refLabel1 = useRef();
    const  refLabel2 = useRef();
    const  refLabel3 = useRef();
    const labels = [ refLabel1 , refLabel2 , refLabel3 ];
    let positionX = 0;
    let final = false;


    const handleLabels = useCallback( ( currentIndex  )=>{

        switch ( currentIndex ) {
            case 0:{
                positionX=0;
                break;
            }
            case 1:
                positionX=1400;
                break;
            case 2 :
                positionX=2800;
                break;
        }

        ref.current.scrollTo({
            top:0,
            left:positionX,
            behavior:"smooth"
        })

        searchLabel(labels , currentIndex  );
    },[]);

    
    useEffect( ()=> {
        searchLabel( labels , 0);
    },[])

    function searchLabel( array , currentIndex ) {        
        array.map( ( label , index  ) => {
            if( !(index === currentIndex) ) {
                label.current.style.background ="transparent";
            } else {
                label.current.style.background="#FFF";
            }
        })
    }

    const handleGoSlider = useCallback( ( direction )=> {
        calculateNewPosition( direction );

        handleScroll( final );

        searchLabel( labels , ( positionX / 1400 ));

    },[])

    function handleScroll( condition ) {
        if( !condition ){
            ref.current.scrollTo({
                left: positionX,
                top:0,
                behavior:"smooth",
            })
        }else {
            ref.current.scrollTo({
                left: positionX,
                top:0,
            })
        }
    }

    function calculateNewPosition( direction ){
        if( direction ){
            if( !(positionX === 2800) ){
                final=false;
                positionX += 1400;
            }else {
                positionX=0;
                final=true;
            }
        }else{
            if( positionX === 0 ){
                positionX = 2800;
                final=true;
            }else {
                positionX -= 1400;
                final=false
                ;
            }
        }
    }
 
    
  return (
    <Div>
        <div className="content"  ref = { ref }>
            <button onClick = { ()=> handleGoSlider( false) } > <FaChevronLeft  /> </button>
            <div className="wrapper">
                <ItemSlide  photo ={ photo1 } 
                    title =" Education College"
                    titleSpan ="SmartEDU"
                    textAlign="right"
                    text ="With Landigoo responsive landing page template, you can promote your all hosting, domain and email services."
                />
                <ItemSlide  photo ={ photo2 } 
                    title="SmartEDU"
                    titleSpan="Education School"
                    textAlign="left"
                    text ="With Landigoo responsive landing page template, you can promote your all hosting, domain and email services."
                />
                <ItemSlide  photo ={ photo3 } 
                    titleSpan="VPS Servers"
                    title="Company"
                    textAlign="center"
                    text="1 IP included with each server Your Choice of any OS (CentOS, Windows, Debian, Fedora) FREE Reboots"
                />
            </div>
            <div className="labels">
                <div className="label"  ref ={ refLabel1} onClick = { () => handleLabels(0)} ></div>
                <div className="label"  ref ={ refLabel2 } onClick = { () => handleLabels( 1 )} ></div>
                <div className="label"  ref ={ refLabel3} onClick = { () => handleLabels( 2 )} ></div>
            </div>
            <button onClick = { ()=> handleGoSlider( true ) }> <FaChevronRight /></button>
        </div>
    </Div>
  )
}

