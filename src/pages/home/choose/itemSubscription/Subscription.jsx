import {Div } from './style'
import {FaDatabase,FaEnvelope,FaFutbol,FaPen } from 'react-icons/fa'
import {BiPen,BiLink } from 'react-icons/bi'
import { ButtonAnimated } from '../../../../components/buttons/ButtonAnimated'

export function Subscription({value,time , address , storage , database , domain ,suport ,index}) {
  return (
    <Div key ={index}>
        <article className ="head">
            <p>${value}</p>
            <h2>{time}</h2>
        </article>
        <article className="body">
            <ul>
                <li> <FaEnvelope /> <span>{address}</span> Email Address</li>
                <li> <BiPen /> <span>{storage}</span>of Storage</li>
                <li><FaDatabase /> <span>{database}</span>Databases</li>
                <li><BiLink /> <span>{domain}</span>Domains</li>
                <li><FaFutbol />  <span>{suport}</span>Support</li>
            </ul>

            <ButtonAnimated 
              text ="Order now"
              size="9rem"
              borderColor ="#EEA412"
              backColor ="#EEA412" 
              afterColor ="#333333" 
              color="#FFF"
            />
        </article>
    </Div>
  )
}
