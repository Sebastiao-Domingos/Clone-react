import styled from 'styled-components'

export const Div = styled.div`
    width: ${ props => props.width ? props.width : 47 }% ;
    min-height:35rem;

    .contentPhoto {
        position:relative;
        width:100%;
        height:26.3rem;

        &::after{
            position:absolute;
            content:"";
            top:0;
            left:0;
            bottom:0;
            right:0;
        }

        &:hover::after{
            background:rgba(99,99,99,.2);
        }
        &:hover ~ div{
            h3{
                color:#EEA412;
            }
        }
    }
    .contentText{
        padding-top:2rem;
        width:100%;
        border:1px solid #4babb1;
        h3,p{ padding:0 1.5rem}
        h3{
            font-size:1.2rem;
        }
        p{
            margin:1rem 0;
            display:flex;
            align-items:center;
        }

        >div{
            width:100%;
            height:3.5rem;
            border-top:1px solid #4babb1;
            display:flex;
            ul{
                display:flex;
                list-style:none;
                margin:auto;

                li{
                    margin: 0 .5rem;
                    font-size:.7rem;

                    &:hover{
                        color:#EEA412;
                    }

                    >svg{
                        width:auto;
                        padding-right:5px;
                    }
                }

            }
        }
    }
`;