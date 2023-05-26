import styled ,{keyframes} from 'styled-components'


const come = keyframes`
    0%{
        top:-50%;
    }
    100%{
        top:16rem;
    }
` 
export const Div = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index:1000;
    background:rgba(0, 0, 0, 0.4);

    >div{
        position:absolute;
        left:50%;
        margin:${ props => props.changed ? "7rem":"5rem" } auto;
        padding:6rem 2rem 1.5rem 1rem;
        width:60%;
        min-height:20rem;
        background:#fff;
        border-radius:5px;
        overflow:hidden;
        transform:translate(-50%,-50%);
        animation: ${ come } 1s forwards; 

        &::before{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            padding:15px 15px 25px 15px;
            content:"Costumer Login";
            background:transparent;
            border-bottom:1px solid rgba(204, 204, 204, 0.8);
            color:#1F1F1F;
            font-size:1rem;
        }
        >button{
            position:absolute;
            top:20px;
            right:20px;
            background:transparent;
            font-weight:700;
            font-size:1.1rem;
            color:#979595;
        }
        .menu{
            width:100%;
            background:rgba(204, 204, 204, 0.2);
            padding:20px 1rem;
            border-radius:4px;
        }

        .form{
            padding-left:1rem;
        }
        >div{
            >div{
                display:flex;
                align-items:center;

                p{
                    margin-left:2rem;
                    transition:all .4s ease-in-out;

                    &:hover{
                        color:#17a2b8;
                    }
                }

                form{
                    margin-top:0rem;

                    >div{
                        display:flex;
                        align-items:center;
                        margin-top:1.2rem;

                        >button{
                            margin-right:1rem;
                        }
                    }
                }
            }
        }
    }
`;