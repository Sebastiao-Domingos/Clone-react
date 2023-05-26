import styled ,{keyframes }from 'styled-components';

const comeLeft = keyframes`
    0%{
        opacity:0;
        left:0;

    }
    100%{
        opacity:1;
        left:30%;
    }
`
const comeRight = keyframes`
    0%{
        opacity:0;
        right:0;

    }
    100%{
        opacity:1;
        right:30%;
    }
`
const comeShadow = keyframes`
    0%{
        top:50%;
        left:50%;
        bottom:50%;
        right:50%;
        width:0%;
        height:0%;
    }
    100%{
        top:0%;
        left:0%;
        right:0%;
        bottom:0;
        width:100%;
        height:100%; 
    }
`
const goShadow = keyframes`
    0%{
        top:0%;
        left:0%;
        right:0%;
        bottom:0;
        width:100%;
        height:100%; 
    }
    100%{
        top:50%;
        left:50%;
        bottom:50%;
        right:50%;
        width:0%;
        height:0%;
    }
`
export const Nav = styled.nav`
    width:100%;
    height:5rem;
    background:#4C5A7D;
    color: #eea412; 
    padding: 0 2rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
  
    >div , >div ul {display:flex; }
    a {
        text-decoration:none;
        text-transform:uppercase;
        font-size:1rem;
    }
    >div{
        width:72%;
        justify-content:space-between;
        align-items:center;

        ul { list-style:none}
        >ul{
            gap:.6rem;

            >li {
                width:6rem;
                display:flex;
                position:relative;
                
                &::before,&::after , a::before{
                    position:absolute;
                    content:"";
                    top:-10px;
                    width:5px;
                    height:5px;
                    border-radius:50%;
                    background:#FFF;
                    display:none;
                    transition:all 1s ease-in-out;
                }
                &::before{
                    left:0;
                }
                &::after{
                    right:0;
                }
                
                a{
                    color:#FFF;
                    width:100%;
                    height:100%;
                    text-align:center;
                    &::before{
                        left:50%;
                        transform:translateX(-50%);
                    } 
                }

                &:hover >a{
                    color:#EEA412;
                }
                &:hover::before{
                    display:block;
                    animation: ${ comeLeft } 1s forwards ;
                }
                &:hover::after{
                    display:block;
                    animation: ${ comeRight } 1s forwards ;
                }
                &:hover >a::before{
                    display:block;
                }
                &:hover >div{
                    display:block;
                }

                >div{
                    display:none;
                    position:absolute;
                    z-index:1;
                    top:0rem;
                    padding-top:3.4rem;

                    >ul{
                    flex-direction:column;
                    width:11rem;
                    background:#FFF;
                    box-shadow:0 0 2px;
                    padding:15px 10px;

                        >li {
                            padding:8px 2px;

                            &:hover{
                                background:#EEA412;
                            }
                            a {
                                color:#000;
                                text-transform:capitalize;
                            }
                        }
                    }
                }
            }
        }

        >a{
            position:relative;
            color:#000;
            width:8.5rem;
            height:3rem;
            background:#EEA412;
            border:2px solid #EEA412 ;
            border-radius:2px;

            &::before{
                position:absolute;
                top:0;
                left:0;
                right:0;
                bottom:0;
                content:'';
                background:#FFF;
                border-radius:2px;
                animation: ${ comeShadow } .2s forwards ease-in-out;
            }

            &:hover::before{
                animation: ${ goShadow } .2s forwards ease-in-out;
            }
            &:hover >span{
                color:#FFF;
            }
            >span{
                width:100%;
                height:100%;
                display:flex;
                justify-content:center;
                align-items:center;
                position:absolute;
                z-index:1;
                font-size:.9rem;
            }
        }
    }

`;