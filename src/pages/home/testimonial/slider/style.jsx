import styled from 'styled-components'

export const Div = styled.div`
    width:90%;
    height:22rem;
    margin:1rem auto 4rem auto;
    >div.container{
        position:relative;
        width:100%;
        height:27rem;

        >button{
            position:absolute;
            width:3.5rem;
            height:3.5rem;
            top:50%;
            transform:translateY(-50%);
            border-radius:3px;
            transition:all .4s ease-in-out;

            &:first-child{
                left:-60px;
            }
            &:last-child{
                right:-60px;
            }

            &:hover{
                background:#EEA412;
                color:#FFFfff;
            }
            >svg{
                font-size:1.2rem;
                color:#C2C2C2;
            }
        }

        >.contentWrapper{
            width:100%;
            height:22rem;
            overflow:hidden;

            >.wrapper{
                display:flex;
                justify-content:space-around;
                align-items:center;
                width:598%;
            }
        }
    }
`;