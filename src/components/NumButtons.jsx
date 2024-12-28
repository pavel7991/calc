import Button from './Button'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  row-gap: 10px;

  & button:nth-last-child(2) {
    grid-column: span 2;
    width: 130px;
    border-radius: 35px;
  }
`

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']

const NumButtons = ({ onClick }) => {
  return (
    <Container>
      {numbers.map((number) => (
        <Button key={number} value={number} onClick={onClick} />
      ))}
    </Container>
  )
}

export default NumButtons
