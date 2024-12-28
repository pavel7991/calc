import styled from 'styled-components'

const Btn = styled.button`
  background-color: ${(props) =>
    props.theme === 'orange' ? '#fe9f0a' : props.theme === 'secondary' ? '#a5a5a5' : '#333333'};
  color: ${(props) => (props.theme === 'orange' ? '#f4ffff' : props.theme === 'secondary' ? '#020202' : '#fff')};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 25px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color, color 0.3s;
  font-family: 'Lora', serif;

  &:hover {
    background-color: ${(props) =>
      props.theme === 'orange' ? '#fbc78e' : props.theme === 'secondary' ? '#d9d9d9' : '#737373'};
    color: ${(props) => (props.theme === 'orange' ? '#fffffa' : props.theme === 'secondary' ? '#090909' : '#fff')};
  }
`

const Button = ({ value, onClick, theme }) => {
  return (
    <Btn className="button" value={value} theme={theme} onClick={() => onClick(value)}>
      {value}
    </Btn>
  )
}

export default Button
