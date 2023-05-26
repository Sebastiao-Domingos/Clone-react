import styled from 'styled-components'


export default function Button({text , checked,event }) {
  return (
    <Btn checked ={ checked } onClick ={event}>{text}</Btn>
  )
}


export const Btn = styled.button`
    font-size:1rem;
    padding:1rem 3rem;
    transition:all .4s ease-in-out;
    background:${ props => props.checked ? "#4BABB1":"transparent"};
    color:${props => props.checked ? "#FFF": "#333333"};
    &:hover{
        background: ${props => props.checked ? "#4BABB1":"#333333"};
        color:#FFF;
    }
            
`;