import styled from 'styled-components'

export const Title = styled.h2`
    color:#000;
    text-align:center;
    font-size:3rem;
`;

export default function Title2({text }) {
  return (
    <Title>{text}</Title>
  )
}
