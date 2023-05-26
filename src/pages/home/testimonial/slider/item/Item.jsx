import { Div } from './style'
import {FaQuoteLeft } from 'react-icons/fa'

export function Item({ photo , title , name , info,index }) {
  return (
    <Div key ={ index }>
        <img src={photo} alt="" />
        <p>{name}</p>

        <div className="description">
            <h2><FaQuoteLeft /> {title}!</h2>
            <p>{info}</p>
        </div>
    </Div>
  )
}
