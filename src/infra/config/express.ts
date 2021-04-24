import express from 'express'
import cors from 'cors'
import properties from '@/infra/config/properties'
import logger from '@/infra/config/winston'

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const PORT = properties.port ?? 6666

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => logger.info(`[${properties.appLabel}] is running on port ${PORT}`))

export default app
