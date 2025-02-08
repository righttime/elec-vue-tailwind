const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('helloWorld', {
  hi: (name: string) => ipcRenderer.send('greet', name),
  bye: (name: string) => ipcRenderer.invoke('bye', name),
  toggleDevTools: () => ipcRenderer.invoke("toggleDevTools"),
});
