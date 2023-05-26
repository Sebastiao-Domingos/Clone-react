import styled from 'styled-components'

export const Div = styled.div`
    width:31.9%;
    min-height:36rem;
    background:#FFF;
    box-shadow: 0 0 10px #ccc;

    .head,.body{ width:100%; padding:1.5rem 1.7rem;}

    .head{
        background:#333333;
        text-align:center;
        
        >h2{
            color:#FFFFFF;
            font-size:2rem;
            padding-bottom:1.2rem;
            border-bottom:1px solid #959494;
            margin-bottom:.5rem;
        }

        h3 , p { color :#FEFFFF;}
        >h3{

            span{
                font-size:1.8rem;
            }
        }
        p{
            width:12rem;
            margin:auto;
        }
    }


    .body{
        display:flex;
        flex-direction:column;
        >svg{
            color:#EEA412;
            font-size:3.5rem;
            margin:auto;
        }

        >ul{
            margin:.9rem 0;
            list-style:none;

            >li{
                padding:10px 0;
                &:not(:last-child){
                    border-bottom:2px solid rgb(4, 32, 4);
                }

                >svg{
                    color:rgb(4,32,4);
                }
                >span{ 
                    margin-left:10px;
                    font-size:.9rem;
                    transition:all .4s ease-in-out;
                }

                &:hover >span{ 
                    margin-left:20px;
                }
            }
        }

        >div{ margin:auto;}
    }
`;