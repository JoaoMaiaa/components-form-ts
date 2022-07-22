import { NextPage } from 'next'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

import Input from '../components/input'
import Button from '../components/button'

const Home: NextPage = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [data, setData] = useState<boolean>(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (email !== '' && name !== '') setData(true)
  }

  function handleClick() {
    setName('')
    setEmail('')
    setData(false)
  }

  return (
    <>
      <h1>Formulário com typescript</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          value={name}
          name="name"
          type="text"
          handleChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
        />
        <br />
        <br />
        <Input
          value={email}
          name="email"
          type="email"
          handleChange={(e) => setEmail(e.target.value)}
          placeholder="Seu email"
        />
        <br />
        <br />
        <Button type="submit" nameButton="Enviar" />
        <button
          style={{ cursor: 'pointer' }}
          type="button"
          onClick={handleClick}
        >
          Limpar
        </button>
        <hr />
      </form>
      {data ? `Seu Nome: ${name}` : ' '}
      <br />
      <br />
      {data ? `Seu Email: ${email}` : ' '}
      <Link href="/login">Login</Link> <Link href="/register">Register</Link>
    </>
  )
}

export default Home
