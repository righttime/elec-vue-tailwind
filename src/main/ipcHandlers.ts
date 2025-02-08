import { ipcMain, BrowserWindow } from 'electron';

export function registerIpcHandlers(mainWindow: BrowserWindow): void {
  // 예시 IPC 핸들러
  ipcMain.on('greet', (event, name: string) => {
    console.log(`Greet ${name} from main process`)
  });

  ipcMain.handle('bye', async (event, name: string) => {
    return `Bye ${name} from main process`
  });

  ipcMain.handle('toggleDevTools', async () => {
    if(mainWindow.webContents.isDevToolsOpened()) {
      mainWindow.webContents.closeDevTools()
    } else {
      mainWindow.webContents.openDevTools()
    }
  });

} 