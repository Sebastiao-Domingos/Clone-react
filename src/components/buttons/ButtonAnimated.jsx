import styled,{keyframes} from 'styled-components'
const comeShadow = keyframes`
    0%{
        top:50%;
        left:50%;
        bottom:50%;
        right:50%;
        width:0%;
        height:0%;
    }
    100%{
        top:0%;
        left:0%;
        right:0%;
        bottom:0;
        width:100%;
        height:100%; 
    }
`
const goShadow = keyframes`
    0%{
        top:0%;
        left:0%;
        right:0%;
        bottom:0;
        width:100%;
        height:100%; 
    }
    100%{
        top:50%;
        left:50%;
        bottom:50%;
        right:50%;
        width:0%;
        height:0%;
    }
`

const Div = styled.div`
    position:relative;
    width:${ props => props.size };
    height:3rem;
    background:${ props => props.backColor ? props.backColor : "#fff"};
    border:2px solid ${ props => props.borderColor ? props.borderColor : "#FFF"} ;
    border-radius:2px;

    &::before{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        content:'';
        background:${ props => props.afterColor ? props.afterColor : "#EEA412"};
        border-radius:2px;
        animation: ${ comeShadow } .2s forwards ease-in-out;
    }

    &:hover::before{
        animation: ${ goShadow } .2s forwards ease-in-out;
    }
    &:hover >a span{
        color:${ props => props.afterColor ? props.afterColor :"#EEA412"};
    }
    >a{
        width:100%;
        height:100%;
        color: ${ props => props.color ? props.color :"#000"};
        text-decoration:none;
        text-transform:uppercase;

        >span{
            position:absolute;
            width:100%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:1rem;
            font-weight:500;
            position:absolute;
            z-index:1;
        }
    }
`;


export function ButtonAnimated({ text , event ,size, borderColor , backColor , afterColor , color }) {
  return (
    <Div size = { size } onClick = { event } borderColor ={ borderColor } afterColor ={ afterColor } backColor ={ backColor } color = {color} >
        <a href="#" >
            <span> {text }</span>
        </a>
    </Div>
  )
}
