import net from 'net'
import { exec } from 'child_process'

const port = process.env.PORT ? (process.env.PORT as any) - 100 : 3000

process.env.ELECTRON_START_URL = `http://localhost:${port}`

const client = new net.Socket()

let startedElectron = false
const tryConnection = () =>
  client.connect({ port: port }, () => {
    client.end()
    if (!startedElectron) {
      console.log('starting electron')
      startedElectron = true
      exec('npm run electron')
    }
  })

tryConnection()

client.on('error', () => {
  console.log(`Connection failed on port ${port}, retrying`)
  setTimeout(tryConnection, 1000)
})
