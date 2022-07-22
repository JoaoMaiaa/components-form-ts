import { ChangeEventHandler } from 'react'

export type InputProps = {
  type: string
  value: string
  name: string
  placeholder: string
  handleChange: ChangeEventHandler<HTMLInputElement>
}

const Input = ({
  type,
  value,
  name,
  placeholder,
  handleChange
}: InputProps) => {
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  )
}

export default Input
