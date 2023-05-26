import styled from 'styled-components'

export const Div = styled.div`
    width:39rem;
    min-height:22rem;
    background:transparent;
    text-align:center;
    padding-top:2rem;
    color:#fff;
    
    img{
        transform:scale(.9);
    }
    >p{
        font-size:1.2rem;
    }
    >div{
        margin-top:1rem;
        width:100%;
        padding:1.7rem 2rem;
        background:#000000;

        h2{
            margin-bottom:1rem;

            >svg{
                font-size:2.5rem;
                padding-right:10px;
                width:auto;
                height:auto;
                color:#EEA412;
            }
        }

        >p{
            font-size:1.13rem;
            color:#8d8a8a;
        }
    }
    
`;