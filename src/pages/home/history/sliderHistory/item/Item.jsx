import styled from 'styled-components'


export default function Item({ photo, top , topSet , left ,text , year }) {
  return (
    <Div photo = {photo } left ={ left } top ={ top } topSet ={ topSet }>
        <div className ="seta"></div>
    
        <h2>{year}</h2>
        <p> {text } </p>
        
    </Div>
  )
}


const Div = styled.div`
    position:absolute;
    top: ${ props => !props.top ? "2rem" : "60%"};
    left: ${ props => props.left ? props.left : ".9rem"}   ;
    width:15rem;
    height:15rem;
    background:linear-gradient(60deg , rgba( 0,0,0,.3) , rgba(0,0,0,.3)), url(${ props => props.photo });
    background-position:center;
    background-size:cover;
    border:1px solid #EEA412;
    border-radius:2rem;
    padding:1.5rem;
    
    >div.seta{
        position:absolute;
        top: ${ props => props.topSet ? "-1%" : "100%"};
        left:50%;
        transform:translate(-50%, -50%) rotate(45deg);
        z-index:-1;
        width:20px;
        height:20px;
        background:#fff;
        border:1px solid #EEA412;
    }

    h2 ,p{
        color:#fff;
    }
`
