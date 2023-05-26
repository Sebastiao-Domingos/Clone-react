import styled from 'styled-components'

export const Div = styled.div`
    width:100%;
    min-height:20rem;
    background:#fff;
    >div.container{
        padding-top:3rem;

        >p{
            width:45rem;
            margin:auto;
        }

        >div{
            display:flex;
            flex-wrap:wrap;
            justify-content:space-between;
            gap:2rem;
            padding:4rem 7rem;

            >div{
                width:22.7%;

                .contentPhoto{
                    height:12rem;
                    img{
                        width:100%;
                        height:12rem;
                    }
                }

                .contentText{
                    h3,p{ padding : 0 1rem; }
                    p{ font-size:.8rem;}
                }
           
            }
        }
    }
`;