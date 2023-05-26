import styled from 'styled-components'

export default function Item( {Icon, title }) {
  return (
    <Div>
        <div className="icon">
            <Icon />
        </div>
        <h2>{title}</h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eligendi expedita, provident cupiditate in excepturi.</p>
    </Div>
  )
}

export const Div = styled.div`
    width:22rem;
    height:25rem;
    box-shadow: 0 0 10px #CCC;
    border-radius:5px;
    padding:1rem;
    text-align:left;

    &:hover {
        >div{
            border-color:#EEA412;

            >svg{
                color:#1babb1;
            }
        }

        >h2{
            color:#EEA412;
        }
    }
    >div , >div svg , h2{
        transition: all .4s ease-in-out;
    }

    >div{
        width:95px;
        height:100px;
        border:3px solid #1babb1;
        border-radius:3px;
        display:flex;
        margin-bottom:1rem;

        svg{
            font-size:5rem;
            margin:auto;
            color:#EEA412;
        }
    }

    h2{
        font-size:1.5rem;
        margin-bottom:1rem;
    }
`;
