import { useState } from 'react'
import Button from './components/button'
import Input from './components/Input'


function App() {
  const [fieldValue, setFieldValue] = useState('')

  const handleOnChange = (e) => {
    const inputValue = e.target.value
    setFieldValue(inputValue)
  }

  return (
    <>
      <Button
        color="aliceblue"
        title="Click"
        onClick={() => {
          console.log('click')
          console.log(fieldValue)
        }}
      />

      <div style={{ margin: '30px 0' }} />

      <Input
        value={fieldValue}
        onChange={handleOnChange}
        type="text"
      />
    </>
  )
}

export default App
