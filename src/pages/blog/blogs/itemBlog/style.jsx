import styled from 'styled-components'
export const Div = styled.div`
    width:31%;
    min-height:30rem;
    background:#f1f1f1;
    padding:1.5rem;
  

    >img{
        width:100%;
        height:auto;
        margin:auto;
    }

    h3{
        margin:.6rem 0;
    }

    .icons{
        color:#EEA412;
        font-size:.7rem;
        margin-top:.6rem;
        >svg{
            color:#999999;
            width:auto;
            padding-right:3px;

            &:not(:first-child){
                padding-left:11px;
            }
        }
    }

    >div{
        margin-top:1rem;
        height:2.5rem;
        a{
            span{
                font-size:.8rem;
            }
        }
    }

`;