import styled ,{keyframes} from 'styled-components'
import {FaFacebook , FaSkype } from 'react-icons/fa'

export function Teacher({photo , name , category }) {
  return (
    <Div>
        <img src={photo} alt="teacher" />

        <div className="text">
            <h2>{name}</h2>
            <p>{category}</p>
        </div>

        <div className="cover">
            <div>
                <FaFacebook />
        
                <FaSkype />
                <FaFacebook />
        
                <  FaSkype />
            </div>
        </div>
    </Div>
  )
}


const come = keyframes``
const Div = styled.div`
    position:relative;
    width:255px;
    height:27rem;
    background:#f2f2f4;
    text-align:center;
    display:flex;
    flex-direction:column;


    &:hover{

        .text{ background :#4BABB1; color:#FFF;}

        .cover{
            opacity:1;
            width:100%;
            height:20.5rem;
            border-radius:0px;
            top:0;
            left:0;
            width:100%;
            transform:rotate(0deg);
        }
    }

    img{
        width:255px;
    }

    .text{
        height:7rem;
        
        h2{
            margin-top:1rem;
            text-transform:uppercase;
        }
        p{
            color:#a2a2a2;
        }
    }

    .cover{
        position:absolute;
        top:40%;
        left:40%;
        width:10%;
        height:10rem;
        background:rgba(238, 165, 18, 0.8);
        border-radius:50%;
        transform:rotate(80deg);
        display:flex;
        opacity:0;
        transition:all .5s ease-in-out;


        >div{
            margin:auto;

            >svg{
                width:auto;
                height:auto;
                padding:10px;
                margin:0 05px;
                font-size:1rem;
                color:#FFF;
                background:#333333;
                border-radius:50%;

            }
        }
    }
`;
