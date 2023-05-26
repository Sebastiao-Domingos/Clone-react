import styled from 'styled-components'

export const Div = styled.div`
    width:21.5rem;
    min-height:25rem;
    border:1px solid #ddd;
    box-shadow: 0 0 10px #ccc;
    background:#fff;
    transition:all .5s ease-in-out;

    &:hover{
        transform:scale(1.05);
    }

    .head{
        background:#333333;
        color:#FFF;
        padding:1.5rem 0;
        text-align:center;
        transition:all .4s ease-in-out;

        &:hover{
            background:#EEA412;
        }
        p{
            font-size:2rem;
        }
        h2{
            font-size:1rem;
            text-transform:uppercase;
        }
    }

    .body{
        padding:1.5rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        ul{
            list-style:none;
            margin-bottom:2rem;
            border-bottom:1px solid #cccc;
            padding-bottom:1.5rem;
            
            li{
                font-size:1rem;
                margin:.7rem 0;
                color:#C2C2C2;

                >svg{
                    font-size:1.2rem;
                    width:25px;
                    height:auto;
                    padding-right:10px;
                    border-right:1px solid #c2c2c2;
                }
                span{
                    color:#000000;
                    margin:0 15px;
                    font-weight:600;
                    font-size:1rem;
                }
            }
        }
        >button{
            margin:auto;
        }
    }
`;