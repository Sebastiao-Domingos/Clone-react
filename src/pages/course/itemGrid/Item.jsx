import {Div} from './style'
import { FaCalendar,FaUsers ,FaBook , FaStar} from 'react-icons/fa'

export default function Item({ photo , width , height, title }) {
  return (
    <Div width ={width} height ={height}>
        <div className="contentPhoto">
            <img src={ photo} alt="" />
        </div>
        <div className="contentText">
            <h3>{title}</h3>
            <p>Lorem ipsum door sit amet, fugiat deicata avise id cum, no quo maiorum intel ogrets geuiat operts elicata libere avisse id cumlegebat, liber regione eu sit....</p>
            <p>4.5 <FaStar /> <FaStar /><FaStar /><FaStar /><FaStar /> <FaStar /></p>

            <div className="footText">
                <ul>
                    <li><FaCalendar /> 6 Month</li>
                    <li><FaUsers /> 56 Student</li>
                    <li><FaBook /> 7 Books</li>
                </ul>
            </div>
        </div>
    </Div>
  )
}
