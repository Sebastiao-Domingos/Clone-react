import styled from 'styled-components'


export default function Comment({photo ,width, name , text}) {
  return (
    <Div width ={width}>
        <img src={photo} alt="foto" />

        <div className="bodyComment">
           <p className ="head">
            <a href="#">{name}</a>
            <a href="#">REPLY»</a>
           </p>
           <span>February 22, 2015</span>

           <p className ="comment">{text}</p>
        </div>
    </Div>
  )
}


export const Div = styled.div`
    width:${props => props.width ? props.width : 100}%;
    min-height:10rem;
    margin:.6rem 0;
    display:flex;

    img{
        width:100px;
        height:70px;
        border:1px solid #1babb1;
    }

    >div{
        margin-left:10px;
        padding:1.5rem;
        border-top:2px solid #EEA412;

        .head{
            width:100%;
            display:flex;
            justify-content:space-between;

            a{
                text-decoration:none;
                color:#000;

                &:first-child{
                    font-size:1rem;

                    &:hover{
                        color:#1babb1;
                    }
                }
            }
        }

        span{
            font-style:italic;
            font-size:.8rem;
        }

        .comment{
            margin:.5rem 0;
        }

    }
`;
