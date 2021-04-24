import { createLogger, transports, format } from 'winston'
import properties from '@/infra/config/properties'
const { Console } = transports
const { combine, timestamp, label, colorize, printf } = format

const customFormat = combine(
  label({ label: properties.appName }),
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  colorize({ all: true }),
  printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
)

const logger = createLogger({
  format: customFormat,
  transports: new Console()
})

export default logger
