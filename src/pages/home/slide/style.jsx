import styled from 'styled-components'

export const Div = styled.div`
    position:relative;
    width:100%;
    height:96vh;
    cursor:grab;

    .content{
        width:100%;
        height:96vh;
        overflow:hidden;

        .wrapper{
            width:310%;
            height:90vh;
            display:flex;
            gap:20px;
        }

        >button{
            position:absolute;
            top:50%;
            transform:translateY(-50%);
            background:#EEA412;
            width:3rem;
            height:3.5rem;

            &:last-child{
                right:0;
            }

            >svg{
                background:transparent;
                font-size:2rem;
                color:white;
            }
        }

        .labels{
            position:absolute;
            bottom:30px;
            left:50%;
            transform:translateX(-50%);
            display:flex;
            gap:5px;

            .label{
                width:34px;
                height:5px;
                border:1px solid #cccccc;
                cursor:pointer;  
            }
        }
    }
    
`;