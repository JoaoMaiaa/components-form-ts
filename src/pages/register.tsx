import { FormEvent, useState } from 'react'
import Link from 'next/link'

import Input from '../components/input'
import Button from '../components/button'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const response = await fetch('/api/register', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
      method: 'post'
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
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
      <br />
      <br />
      <Link href="/">Início</Link>
    </>
  )
}

export default Register
