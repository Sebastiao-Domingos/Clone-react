import {Div } from './style'
import { Item } from './item/Item'
import { useEffect ,useState, useRef } from 'react'
import { FaBookReader , FaCalendarAlt, FaUsers } from 'react-icons/fa'
export default function Count() {
  const [counter , setCounter ] = useState(0);
  const state = useRef(0);

  return (
    <Div>
      <Item  Icon ={FaBookReader} left="20px" count ={12000} countName ="Students"/>
      <Item  Icon ={FaUsers} count ={240} countName ="Course"/>
      <Item  Icon ={FaCalendarAlt} count ={55} countName ="Year Completed"/>
    </Div>
  )
}
