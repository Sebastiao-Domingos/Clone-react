import styled from 'styled-components'

export const Div= styled.div`
    width:100%;
    height:20rem;
    background:url( ${props => props.photo }) no-repeat center;
    color:#FFF;
    text-align:center;
    padding:6rem 0;

    h2{
        font-size:3rem;
        margin-bottom:-10px;
    }
    p{
        font-size:1.4rem;
    }
`;