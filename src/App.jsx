import { Outlet } from 'react-router-dom'
import { Menu } from './components/menu/Menu'
import { Modal } from './components/customer/Modal'
import { Footer,Log } from './components/exports/export' 
import { paralax } from './assets/exports/exportSlider'

import { useState , useCallback,useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa'
function App() {

  const [ showed , setShowed ] = useState(false);
  const [ showToggleBtn  ,setShowToggleBtn ] = useState(false);

  const handleModal = useCallback( ( e )=>{
    setShowed( e );
  },[])

  const [ positionY , setPositionY ] = useState(0)

  window.onscroll = ( ) => {
    setPositionY( window.scrollY)
  }
  useEffect( () => {
    setShowToggleBtn( () => (positionY > 50 ) ? true : false );
  },[ positionY ])


  const handlePage = useCallback( ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    })
  },[])

  return (
    <div className="App">
      <img src={paralax} alt="paralax" className="paralax" />
      <Menu  eventModal = { () => handleModal( true ) } />
      { showed && ( <Modal event = { () => handleModal(false ) } />)}
      <Outlet />
      <Log />
      <Footer />

      { showToggleBtn && (
        <button className ="toggleUp" onClick ={ handlePage }><FaChevronUp /></button>
      )}
    </div>
  )
}

export default App
