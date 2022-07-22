import { useState } from 'react'

import Input from '../components/input'
import Button from '../components/button'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <h1>Register</h1>
      <form>
        <Input
          name="email"
          value={email}
          placeholder="Cadastre seu email"
          type="email"
          handleChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <Input
          name="password"
          value={password}
          placeholder="Cadastre uma senha"
          type="password"
          handleChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button type="submit" nameButton="Cadastrar" />
      </form>
    </>
  )
}

export default Register
