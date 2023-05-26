import styled from 'styled-components'


export function Item({ Icon , left , count , countName }) {
  return (
    <Div left ={left} >
        <span><Icon /></span>
        <p>{count}</p>
        <h2>{countName}</h2>
    </Div>
  )
}


export const Div = styled.div`
    position:relative;
    width:35%;
    height:6.5rem;
    background:#EEA412;
    color:#FFFF;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:${ props => props.left ? 9 : 8}rem;
    span{
        position:absolute;
        left:${ props => props.left ? props.left : 0 };
        width:100px;
        height:100%;
        background:#ffff;
        display:flex;

        >svg{
            color:#333333;
            font-size:5rem;
            margin:auto;
        }
    }

    p,h2{
        text-align:left;
        margin:-5px 0;
    }
    p{
        font-size:2rem;
        font-weight:700;
    }
    h2{
        font-size:1.3rem;
    }
`;
