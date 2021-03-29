import { app, BrowserWindow } from "electron";
import path from "path";
import url from "url";

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      webSecurity: true,
      nodeIntegrationInWorker: false,
    },
    title: "@ffmpeg/ffmpeg test",
  });
  mainWindow.removeMenu();

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "app/index.html"),
      protocol: "file:",
      slashes: true,
    });
  mainWindow.loadURL(startUrl);

  process.env.ELECTRON_START_URL && mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

function closeApp() {
  if (process.platform !== "darwin") {
    app.quit();
  }
}

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", closeApp);

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
