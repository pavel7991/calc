import Button from './Button'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 10px;
`

const operators = ['+', '-', '×', '÷']

const OperatorsButtons = ({ onClick }) => {
  return (
    <Container>
      {operators.map((number) => (
        <Button key={number} value={number} onClick={onClick} theme={'orange'} />
      ))}
    </Container>
  )
}

export default OperatorsButtons
