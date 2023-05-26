import styled from 'styled-components'


export const Div = styled.div`
    width:100%;
    min-height:60rem;
    background:#FFF;

    >div.container{
        width:100%;
        min-height:40rem;
        background:#FFFFFF;
        padding:4rem 7rem;

        >p{
           width:44rem; 
           margin:auto;
           color:#999999;
        }

        >div{
            width:100%;
            display:flex;
            flex-wrap:wrap;
            justify-content:space-between;
            gap:4rem;
            margin-top:4rem;
        }
    }
`;