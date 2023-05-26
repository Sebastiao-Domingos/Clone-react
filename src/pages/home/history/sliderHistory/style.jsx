import styled from 'styled-components';

export const Div = styled.div`
    position:relative;
    width:77%;
    min-height:40rem;
    margin:auto;
    z-index:0;

    >button{
        position:absolute;
        top:48.5%;
        transform:translateX(-50%);
        width:40px;
        height:40px;
        border:2px  solid #EEA412;
        border-radius:5px;
        background:#333333;
        z-index:2;

        &:not(:last-child){
            left:-20px;
        }
        &:last-child{
            right:-40px;
        }

        >svg{
            color:#FFF;
            font-size:1rem;
        }

    }
    .container{
        width:100%;
        height:40rem;
        overflow:hidden;

        .content{
            position:relative;
            width:100%;
            min-height:40rem;
    
            .wrapper{
                width:200%;
                height:40rem;
                padding-top:20rem;
    
                .contentRow{
                    position:relative;
                    width:100%;
                    height:7px;
                    padding:0 8rem;
                    display:flex;
                    gap:14.89rem;
    
                    >div:not(:last-child){
                        z-index:1;
                        width:20px;
                        height:20px;
                        border:2px solid #EEA412;
                        border-radius:5px;
                        background:#E7544A;
                    }
                    >div:last-child{
                        position:absolute;
                        top:8px;
                        left:0;
                        width:100%;
                        height:5px;
                        background:#e39b0a;
                        display:flex;
                        gap:20rem;
                    }
                }
            }
        }
    }



`;