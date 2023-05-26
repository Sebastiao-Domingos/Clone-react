import styled from 'styled-components'

export const StyledP = styled.p`
    font-size:1.1rem;
    text-align:center;
    color:#99999999;
`;

export default function Paragraph({text }) {
  return (
    <StyledP>{text}</StyledP>
  )
}
