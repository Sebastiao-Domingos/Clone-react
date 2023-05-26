import styled from 'styled-components'

export const Div = styled.div`
    width:100%;
    min-height:80rem;
    background:#FFF;
    
    >.container{
        width:100%;
        min-height:30rem;
        padding:5rem 7rem;
        display:flex;

        section{
            width:75%;
            .firstContent{
                padding:1.5rem;
                background:#f1f1f1;

                .photo{
                    position:relative;
                    width:100%;
                    height:25rem;
                    background:url( ${ props => props.photo }) no-repeat center;
                    background-size:cover;
    
                    &::before{
                        position:absolute;
                        content:"";
                        top:0;
                        left:0;
                        right:0;
                        bottom:0;
                        transition:all .2s ease-in-out;
                    }
    
                    &:hover::before{
                        background:rgba(99,99,99,.2);
                    }
    
                    .box{
                        position:absolute;
                        bottom:-4rem;
                        right:0;
                        color:#FFF;
                        background:#333333;
                        padding:9px 15px;
    
                        &::before{
                            position:absolute;
                            left:-80%;
                            top:0;
                            content:"30";
                            font-size:1.1rem;
                            font-weight:700;
                            padding:5.5px 13px;
                            color:#FFF;
                            background:#EEA412;
    
                        }
                    }
    
                }
                .icons{
                    color:#EEA412;
                    font-size:.7rem;
                    margin-top:.6rem;
                    >svg{
                        color:#999999;
                        width:auto;
                        padding-right:3px;
            
                        &:not(:first-child){
                            padding-left:11px;
                        }
                    }
                }
    
                h3{
                    margin:.6rem 0;
                    font-size:1.1rem;
                }
    
                p{
                    margin:1rem 0;
                }
                .different{
                    padding:15px;
                    background:#FFF;
                    border-left:5px solid #EEA412;
                }
            }

            .secondContent{
                background:#f1f1f1;
                margin:2rem 0;
                display:flex;
                
                .text{
                    padding:2rem;
                    
                    span{
                        font-weight:700;
                        font-size:1.2rem;

                    }
                }
                .photoSide{
                    width:25rem;
                    height:13rem;
                    background:#EEA412;
                    text-align:center;
                    padding:1rem;
                    img{
                        width:80px;
                        height:80px;
                        border-radius:50%;
                        border:1px solid #ccc;;
                    }

                    >div{
                        margin-top:1rem;
                        svg{
                            font-size:1.1rem;
                            width:auto;
                            height:auto;
                            padding:7px;
                            background:#fff;
                            border-radius:50%;
                            margin: 0 3px;
                        }
                    }
                }
            }

            .thirdContent{
                margin-top:1rem;
                h3{
                    font-size:1.5rem;
                }

                >div{
                    width:100%;
                    display:flex;
                    flex-direction:column;
                    align-items:end;
                    margin-top:1rem;
                }

                .leaveComment{
                    align-items:start;
                    
                    >h2{
                        margin-bottom:1rem;
                        font-size:1.5rem;
                    }
                    
                    >div.message , .simplesInput{
                        margin:1rem 0;
                        width:100%;

                        input, textarea{
                            border-bottom:1px solid rgba(221, 221, 221, 0.5);
                            border-radius:5px;
                        }
                        input{
                            width:30%;
                            padding:12px;
                            font-size:1rem;

                            &:not(:first-child){
                                margin:0 1rem;

                            }
                            &:focus{
                                box-shadow:0 0 7px #007bff;;
                            }
                        }

                        textarea{
                            width:100%;
                            outline:0;
                            padding:10px;

                            &:focus{
                                box-shadow: 0 0 2px #007bff;;
                            }
                        }

                    }
                }
            }


        }




        aside{
            width:25%;
            height:40rem;
            background:#FFF;
            padding:0 0 0 2rem;

            h3{
                margin:2rem 0 1rem 0;
                border-right:2px solid #EEA412;
                font-weight:560;
            }
            ul{ list-style:none;
                li{
                    display:flex;
                    a{ text-decoration:none; color:#333333; font-size:.8rem;}
                }
            }

            .categories{

                ul{
                    li{
                        display:flex;
                        margin:3px 0;
                        border-bottom:1px solid #f2f2f4;
                        border-radius:2px;
    
                        a{
                            padding:5px;
    
                            &:hover{
                                color:#EEA412;
                            }
                        }
                    }
                }
            }
            .searchTag{
                ul{
                    display:flex;
                    flex-wrap:wrap;
                    gap:5px;

                    li{
                        border:1px solid transparent;
                        border-color:red #EEA412;

                        &:hover{ background:#EEA412; a { color : #FFFFFF;}}
                        a{
                            padding:5px;
                            font-weight:500;
                        }
                    }
                }
            }



        }

    }
`;