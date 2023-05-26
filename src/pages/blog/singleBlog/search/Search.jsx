import styled from 'styled-components'
import { FaSearch} from 'react-icons/fa'
import React from 'react'

export  function Search() {
  return (
    <Div>
        <form action="">
            <input type="search" name="search" id="search" placeholder = "Search keywords..." />
            <button action = "submit"><FaSearch /></button>
        </form>
    </Div>
  )
}


export const Div = styled.div`
    width:100%;
    
    >form{
        display:flex;
        input{
            padding:12px;
            border:1px solid #f2f2f5;
            width:82%;

            &:focus{
                box-shadow: 0 0 2px #007bff;
            }
        }
        button{
            display:flex;
            width:18%;
            background:#EEA412;
    
            >svg{
                margin:auto;
                color:#FFF;
            }
        }
    }
`;