import { getColorCodes, log } from '../app/utils/customLog'

const ENVIRONMENT = 'Development'
const DB = 'MongoDB'
const DB_STATUS = `Connected`
const TERMINAL_COLOR = 'yellow'

export const startServer = ({
  port,
  runningPath,
  db = false
}: {
  port: number | string
  runningPath: string
  db?: boolean
}) => {
  log(
    TERMINAL_COLOR,
    '\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *'
  )
  log(
    TERMINAL_COLOR,
    '*                                                         *'
  )
  log(
    TERMINAL_COLOR,
    `*  Starting Server                                        *`
  )
  log(
    TERMINAL_COLOR,
    '*                                                         *'
  )
  log(TERMINAL_COLOR, `*  Environment     : ${ENVIRONMENT}`)
  log(TERMINAL_COLOR, `*  Port            : ${port}`)
  if (db) {
    log(TERMINAL_COLOR, `*  Database        : ${DB}`)
    log(
      TERMINAL_COLOR,
      `*  Database Status : ${
        DB_STATUS !== 'Connected'
          ? getColorCodes(['bgred', 'bright'])
          : getColorCodes(['green'])
      }${DB_STATUS}`
    )
  }
  log(TERMINAL_COLOR, '*')
  log(
    TERMINAL_COLOR,
    `*  Running at      : ${getColorCodes([
      'underline',
      'dimblue'
    ])}${runningPath}`
  )
  log(
    TERMINAL_COLOR,
    '*                                                         *'
  )
  log(
    TERMINAL_COLOR,
    '* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n'
  )
}
