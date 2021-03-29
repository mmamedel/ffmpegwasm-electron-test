const { contextBridge } = require('electron')
const { execSync } = require('child_process')

contextBridge.exposeInMainWorld('electron', {
  exec: (command: string) => {
    const validCommand = /^start https?:\/\/[^\s]+$/
    if (validCommand.test(command)) {
      execSync(command)
    }
  },
})
