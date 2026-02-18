import express from 'express'
import type { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

// Only start listening when not running on Vercel (serverless)
if (process.env.VERCEL !== '1') {
  app.listen(port, () => {
    return console.log(`Server is listening on ${port}`)
  })
}

export default app