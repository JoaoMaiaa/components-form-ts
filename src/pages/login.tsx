import { FormEvent, useState } from 'react'
import Link from 'next/link'

import Input from '../components/input'
import Button from '../components/button'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const response = await fetch('/api/login', {
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
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder="Insira seu email"
          type="email"
          value={email}
          name="email"
          handleChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <Input
          placeholder="Insira sua senha"
          type="password"
          value={password}
          name="password"
          handleChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button type="submit" nameButton="Enviar" />
      </form>
      <br />
      <br />
      <Link href="/">Início</Link>
    </>
  )
}

export default Login
