const { contextBridge, ipcRenderer } = require('electron');

// Exponer APIs seguras al renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // Control de ventana
  toggleMaximize: () => ipcRenderer.invoke('window-toggle-maximize'),
  closeWindow: () => ipcRenderer.invoke('window-close')
});
