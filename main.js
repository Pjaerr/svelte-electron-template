const { app, BrowserWindow, ipcMain } = require('electron');

const path = require('path');

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile('./public/index.html');

  ipcMain.on('hello', (e, data) => {
    // Handle the "hello" message being received from the Svelte app

    const someData = {
      name: 'Electron',
    };

    mainWindow.webContents.send('world', someData);
  });
});

app.on('window-all-closed', () => {
  app.quit();
});
