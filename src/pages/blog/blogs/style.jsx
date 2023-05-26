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
            padding:4rem 7rem;
            >div{
                display:flex;
                flex-wrap:wrap;
                justify-content:space-between;
                gap:2rem;
                margin:2rem 0;

                &:last-child{
                    padding-top:2rem;
                    border-top:1px dotted #DDD;
                }
                >div{
                    width:31%;
    
                    .contentPhoto{
                        height:15rem;
                        img{
                            width:100%;
                            height:15rem;
                        }
                    }
    
                    .contentText{
                        p{ padding : 0 1rem; }
                    }
               
                }
            }

        }
    }
`;