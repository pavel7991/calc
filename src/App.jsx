import Button from './components/Button.jsx'
import NumButtons from './components/NumButtons.jsx'
import OperatorsButtons from './components/OperatorsButtons.jsx'
import { useState } from 'react'
import styled from 'styled-components'

import Display from './components/Display.jsx'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
`
const Container = styled.div`
  width: min(100% - 40px, 320px);
  margin-inline: auto;
  padding: 40px 20px;
  border-radius: 10px;
  background-color: #010101;
`

const DisplayPrimary = styled(Display)`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 14px;
  height: 40px;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 20px;
`

const DisplayLog = styled(Display)`
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  margin-bottom: 10px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`
const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin-bottom: 10px;
`

const App = () => {
  const [display, setDisplay] = useState('0')
  const [storedValue, setStoredValue] = useState(null)
  const [operator, setOperator] = useState(null)

  const calculate = () => {
    let result

    switch (operator) {
      case '+':
        result = parseFloat(storedValue) + parseFloat(display)
        break
      case '-':
        result = parseFloat(storedValue) - parseFloat(display)
        break
      case '×':
        result = parseFloat(storedValue) * parseFloat(display)
        break
      case '÷':
        result = parseFloat(storedValue) / parseFloat(display)
        break
    }
    return Math.round(result * 100) / 100
  }

  const handleClickNum = (value) => {
    if (value === '.' && display.includes('.')) return
    if (value === '.' && display === '0') {
      setDisplay('0.')
      return
    }
    setDisplay((prev) => (prev === '0' ? value : prev.toString() + value.toString()))
  }

  const handleBackspace = () => {
    setDisplay((prev) => (prev.length === 1 ? '0' : prev.toString().slice(0, -1)))
  }

  const handleReset = () => {
    setDisplay('0')
    setStoredValue(null)
    setOperator(null)
  }

  const handleInversion = () => {
    setDisplay((prev) => (parseFloat(prev) * -1).toString())
  }

  const handleEqual = () => {
    if (storedValue && operator) {
      setDisplay(calculate())
      setStoredValue(null)
      setOperator(null)
    }
  }

  const handleClickOperator = (op) => {
    setOperator(op)
    if (storedValue === null) {
      setStoredValue(display)
      setDisplay('0')
      return
    }
    if (display !== '0') {
      setStoredValue(calculate())
      setDisplay('0')
    }
  }

  return (
    <Wrapper>
      <Container>
        <DisplayPrimary value={display} />
        <DisplayLog value={operator ? `${storedValue} ${operator}` : storedValue} />

        <GridContainer>
          <div>
            <GridRow>
              <Button value="AC" theme="secondary" onClick={handleReset} />
              <Button value="←" theme="secondary" onClick={handleBackspace} />
              <Button value="+/-" theme="secondary" onClick={handleInversion} />
            </GridRow>
            <NumButtons onClick={handleClickNum} />
          </div>

          <div style={{ display: 'grid', rowGap: '10px', justifyItems: 'center' }}>
            <OperatorsButtons onClick={handleClickOperator} />
            <Button value="=" onClick={handleEqual} />
          </div>
        </GridContainer>
      </Container>
    </Wrapper>
  )
}

export default App
