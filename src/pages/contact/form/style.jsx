import styled from 'styled-components'

export const Div = styled.div`
    width:35rem;
    min-height:30rem;
    background:#333333;
    color:#ffff;
    padding:2rem;

    .headForm{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        gap:20px;
        margin-bottom:2rem;

        >input{
            padding:15px;
            border-radius:4px;
            width:47%;
            font-size:1rem;
        }
    }
    .bodyForm{
        display:flex;
        flex-direction:column;

        >textarea{
            border-radius:5px;
            padding:20px;
            font-size:1rem;
            margin-bottom:2rem;
            outline:0;
            height:12rem;
        }

        >button{
            width:10rem;
            padding:15px 0;
            border-radius:5px;
            border:1px solid #fff ;
            background :#2D3032;
            font-size:1.2rem;
            color:#fff;
            transition:all .4s ease-in-out;

            &:hover{
                background:#EEA412;
            }

        }
    }
`;