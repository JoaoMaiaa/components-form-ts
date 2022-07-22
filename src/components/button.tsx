export type ButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined
  nameButton: string
}

const Button = ({ type, nameButton }: ButtonProps) => {
  return (
    <>
      <button style={{ cursor: 'pointer', marginRight: '2px' }} type={type}>
        {nameButton}
      </button>
    </>
  )
}

export default Button
