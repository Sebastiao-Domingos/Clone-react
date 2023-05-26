import styled from 'styled-components'
import Item from './item/Item'
import { BiHome } from 'react-icons/bi'
import { AiOutlineBank} from 'react-icons/ai'
import {FaEye } from 'react-icons/fa'
import React from 'react'
export default function Info() {
    const [ itens , setItens ] = React.useState([
        { photo : BiHome , title :"Mission"},
        { photo : FaEye , title :"Vision"},
        { photo : AiOutlineBank , title :"History"}
    ])
  return (
    <Div>
        { itens && itens.map( ( item , index ) => (
            <Item  Icon = { item.photo }  title ={ item.title }/>
        ) )}
    </Div>
  )
}


export const Div = styled.div`
    width:100%;
    min-height:20rem;
    background:#FFFFFF;
    display:flex;
    justify-content:space-between;
    padding:4rem 7rem;
`;