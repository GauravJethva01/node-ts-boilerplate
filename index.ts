import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import testRoutes from 'app/routes/test'
import { startServer } from 'config/serverConfig'

dotenv.config()

const app: Express = express()

const port = process.env.PORT || 5000

app.use('/test', testRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

const runningPath = `http://localhost:${port}`
app.listen(port, () => {
  startServer({ port, runningPath })
})
