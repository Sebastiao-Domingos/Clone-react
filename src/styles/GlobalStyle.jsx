import { createGlobalStyle } from 'styled-components'

export const GlobalStyle =createGlobalStyle `
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        border:none;
        font-family: 'Rubik', sans-serif;
        font-weight:300;
    }
    body{
        position:relative;
        height:auto;
        color: #333333;
        font-size: 14px;
        line-height: 1.80857;
    }


    button{
        cursor:pointer;
    }

    input{
        outline:0;
    }

    .paralax{
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
    }

    @keyframes come {
        0%{ bottom : -20px }
        100%{ bottom :.5rem }
    }

    .toggleUp{
        position:fixed;
        bottom:.5rem;
        right:.5rem;
        z-index:1;
        width:40px;
        height:40px;
        background:#3C3D41;
        border-radius:5px;
        animation: come 1s forwards;

        &:hover{
            background:#EEA412;
        }
        >svg{
            font-size:1.5rem;
            font-weight:300;
            color:#FFF;
        }
    }
`;