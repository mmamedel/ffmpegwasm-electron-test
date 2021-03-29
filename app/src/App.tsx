import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

function App() {
  const [videoSrc, setVideoSrc] = useState("");
  const [message, setMessage] = useState("Click Start to transcode");
  const ffmpeg = createFFmpeg({
    log: true,
    corePath: "./js/ffmpeg-core.js",
  });
  const doTranscode = async () => {
    setMessage("Loading ffmpeg-core.js");
    await ffmpeg.load();
    setMessage("Start transcoding");
    ffmpeg.FS("writeFile", "test.avi", await fetchFile("/flame.avi"));
    await ffmpeg.run("-i", "test.avi", "test.mp4");
    setMessage("Complete transcoding");
    const data = ffmpeg.FS("readFile", "test.mp4");
    setVideoSrc(
      URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" }))
    );
    if (window.electron) {
      window.electron.exec('start https://www.electronjs.org/')
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={doTranscode}>Transcode</button>
      </header>
    </div>
  );
}

export default App;
