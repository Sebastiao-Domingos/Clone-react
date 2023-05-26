import styled from 'styled-components'

export const Btn = styled.button`
    width: ${ props => props.size };
    padding:16px 0;
    text-align:center;
    background: ${ props => props.clicked ? "#EEA412" : "#2D3032" };
    transition:all .4s ease-in-out;
    color:#FFF;
    font-size:1.1rem;
    font-weight:400;

    &:hover{
        background:#EEA412;
    }
`;




export function Button( { text , size , event , clicked  }) {
  return (
    <Btn size = { size }  onClick = { event }  clicked = { clicked}>{text }</Btn>
  )
}

