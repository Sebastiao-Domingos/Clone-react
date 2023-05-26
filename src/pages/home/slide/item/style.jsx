import styled from 'styled-components'
import photo from '../../../../assets/images/slider-01.jpg'
export const Div = styled.div`
    width:100%;
    height:96vh;
    background:linear-gradient( 60deg , rgba( 0,0,0,.4) , rgba(0,0,0,.4)) , url(${ props => props.photo });
    background-position:center;
    background-size:cover;


    .context {
        width:75%;
        margin:12rem auto;
        text-align: ${ props => props.textAlign };
        h2,p{ color: #fff ;s}

        h2{
            font-size:4.2rem;
            span{
                color:#EEA412;
            }
        }
        p{
            font-size:1.3rem;
        }

        .buttons{
            display:flex;
            gap:20px;
            justify-content:${ props => props.textAlign };
            margin-top:2rem;
        }
    }
`;