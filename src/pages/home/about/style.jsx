import styled from 'styled-components'

export const Div = styled.div`
    width:100%;
    min-height:30rem;
    background:${ props => props.backColor ? props.backColor : "#ffffff"};
    padding: 1rem 8%;

    .contentText{
        padding:4rem 0;
        width:45rem;
        margin:auto;
    }

    .container{
        margin:auto;
        >div{
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin:2rem auto;

            img{
                width:33rem;
            }
        }
    }
`;