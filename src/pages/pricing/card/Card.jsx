import {Div} from './style'
import { FaAdjust ,FaBriefcase ,FaCube ,FaCheck} from 'react-icons/fa'
import { ButtonAnimated } from '../../../components/exports/export'
export  function Card({ title,value , icon, infos, index1 }) {
  return (
    <Div key ={ index1}>
        <div className="head">
            <h2>{title}</h2>
            <h3><span>{value}</span> MONTH</h3>
            <p>Lorem ipsum </p>
            <p>Lorem ipsum dolor sit amet</p>
        </div>

        <div className="body">
            { icon }
            <ul>
                { infos && infos.map( (info , index ) => (
                    <li key = {index}><FaCheck /> <span>{info}</span>  </li>
                ))}
            </ul>
            <ButtonAnimated 
                size = "7rem"
                text = 'sign up'
                color="#FFF"
                borderColor ="#EEA412"
                afterColor = "#333333"
                backColor = "#EEA412"
            />
        </div>
    </Div>
  )
}
