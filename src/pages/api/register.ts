// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  email: string
}

export default function register(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email } = req.body
  res.status(200).json({ email })
}
