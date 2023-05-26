import {Div} from './style'
import {FaCalendarAlt,FaTag,FaComments } from 'react-icons/fa'
import {ButtonAnimated } from '../../../../components/exports/export'
export function Item({photo }) {
  return (
    <Div>
        <img src={photo} alt="" />

        <p className ="icons"><FaCalendarAlt className ="first" /> MAY 11, 2015  <FaTag /> NEWS  <FaComments /> 12 COMMENTS</p>

        <h3>Perferendis Doloribus Asperiores.</h3>

        <p>Lorem ipsum door sit amet, fugiat deicata avise id cum, no quo maiorum intel ogrets geuiat operts elicata libere avisse id cumlegebat, liber regione eu sit....</p>
    
        <ButtonAnimated 
            text ="Read more"
            size="8rem"
            borderColor="#EEA412"  backColor ="#EEA412"  afterColor ="#333333" color ="#FFF" 
        />
    </Div>
  )
}
