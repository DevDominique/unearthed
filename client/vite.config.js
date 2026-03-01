/*This file customized beh of Vite tool w/dev server
/ options and more. When npm run build is executed,
resouces in public dir output to server/public dir. Also
specifies that when we try to access '/gifts' endpoint from
client, server will also access this rte at localhost: 3001
while in development*/

import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../server/public',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/gifts': {
        target: 'http://localhost:3001'
      }
    }
  }
})
