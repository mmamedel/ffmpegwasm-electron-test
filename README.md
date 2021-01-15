# Ffmpegwasm in Electron Test
Simple project testing ffmpeg.wasm on an Electron projecy

# Usage
Start React app:
```
cd .\app\
npm install
npm start
```
In the browser, the "Transcode" button should print no errors on the console.

Keep React server running and in another terminal start Electron wrapper:
```
cd .\electron\
npm install
npm start
```
In Electron, the "Transcode" button should print these error messages on the console:
<details>
<summary>Errors</summary>
<p>

```
log.js:24 [HMR] Waiting for update signal from WDS...
log.js:15 [info] use ffmpeg.wasm v0.9.7
log.js:15 [info] load ffmpeg-core
log.js:15 [info] loading ffmpeg-core
log.js:15 [info] fetch http://localhost:3000/js/ffmpeg-core.js
log.js:15 [info] use ffmpeg.wasm v0.9.7
log.js:15 [info] http://localhost:3000/js/ffmpeg-core.js file size = 105830 bytes
log.js:15 [info] http://localhost:3000/js/ffmpeg-core.js blob URL = blob:http://localhost:3000/b9a6d306-093e-489e-8aff-5f6c8074b102
log.js:15 [info] fetch http://localhost:3000/js/ffmpeg-core.wasm
log.js:15 [info] http://localhost:3000/js/ffmpeg-core.wasm file size = 23557464 bytes
log.js:15 [info] http://localhost:3000/js/ffmpeg-core.wasm blob URL = blob:http://localhost:3000/afba68af-9f46-4752-bebe-a530cbb222ba
log.js:15 [info] fetch http://localhost:3000/js/ffmpeg-core.worker.js
log.js:15 [info] http://localhost:3000/js/ffmpeg-core.worker.js file size = 3609 bytes
log.js:15 [info] http://localhost:3000/js/ffmpeg-core.worker.js blob URL = blob:http://localhost:3000/03be5efa-be10-416a-8452-896dcef43eae
log.js:15 [info] ffmpeg-core.js script loaded
log.js:15 [info] ffmpeg-core loaded
log.js:15 [info] use ffmpeg.wasm v0.9.7
log.js:15 [info] run FS.writeFile test.avi <289280 bytes binary file>
log.js:15 [info] run ffmpeg command: -i test.avi test.mp4
App.tsx:24 Uncaught (in promise) TypeError [ERR_WORKER_PATH]: The worker script or module filename must be an absolute path or a relative path starting with './' or '../'. Received "blob:http://localhost:3000/03be5efa-be10-416a-8452-896dcef43eae"
    at new Worker (internal/worker.js:124)
    at Object.Vh (b9a6d306-093e-489e-8aff-5f6c8074b102:37)
    at Object.ki (b9a6d306-093e-489e-8aff-5f6c8074b102:37)
    at Bb (b9a6d306-093e-489e-8aff-5f6c8074b102:160)
    at n (b9a6d306-093e-489e-8aff-5f6c8074b102:206)
    at De (blob:http://localhost:3000/afba68af-9f46-4752-bebe-a530cbb222ba:wasm-function[12576]:0xaabd3b)
    at f._proxy_main (b9a6d306-093e-489e-8aff-5f6c8074b102:226)
    at createFFmpeg.js:133
    at new Promise (<anonymous>)
    at Object.run (createFFmpeg.js:130)
    at doTranscode (App.tsx:18)
NodeError @ internal/errors.js:256
Worker @ internal/worker.js:124
Vh @ b9a6d306-093e-489e-8aff-5f6c8074b102:37
ki @ b9a6d306-093e-489e-8aff-5f6c8074b102:37
Bb @ b9a6d306-093e-489e-8aff-5f6c8074b102:160
n @ b9a6d306-093e-489e-8aff-5f6c8074b102:206
De @ afba68af-9f46-4752-bebe-a530cbb222ba:0xaabd3b
f._proxy_main @ b9a6d306-093e-489e-8aff-5f6c8074b102:226
(anonymous) @ createFFmpeg.js:133
run @ createFFmpeg.js:130
doTranscode @ App.tsx:18
async function (async)
doTranscode @ App.tsx:15
callCallback @ react-dom.development.js:3945
invokeGuardedCallbackDev @ react-dom.development.js:3994
invokeGuardedCallback @ react-dom.development.js:4056
invokeGuardedCallbackAndCatchFirstError @ react-dom.development.js:4070
executeDispatch @ react-dom.development.js:8243
processDispatchQueueItemsInOrder @ react-dom.development.js:8275
processDispatchQueue @ react-dom.development.js:8288
dispatchEventsForPlugins @ react-dom.development.js:8299
(anonymous) @ react-dom.development.js:8508
batchedEventUpdates$1 @ react-dom.development.js:22396
batchedEventUpdates @ react-dom.development.js:3745
dispatchEventForPluginEventSystem @ react-dom.development.js:8507
attemptToDispatchEvent @ react-dom.development.js:6005
dispatchEvent @ react-dom.development.js:5924
unstable_runWithPriority @ scheduler.development.js:646
runWithPriority$1 @ react-dom.development.js:11276
discreteUpdates$1 @ react-dom.development.js:22413
discreteUpdates @ react-dom.development.js:3756
dispatchDiscreteEvent @ react-dom.development.js:5889
index.js:1 GET blob:http://localhost:3000/afba68af-9f46-4752-bebe-a530cbb222ba:wasm-function[12576]:0xaabd3b net::ERR_FILE_NOT_FOUND
(anonymous) @ index.js:1
c @ index.js:1
(anonymous) @ index.js:1
e.<computed> @ index.js:1
c @ index.js:1
t @ index.js:1
(anonymous) @ index.js:1
o @ index.js:1
A._invoke @ index.js:1
e.<computed> @ index.js:1
e.async @ index.js:1
(anonymous) @ index.js:1
(anonymous) @ index.js:1
c @ index.js:1
(anonymous) @ index.js:1
e.<computed> @ index.js:1
c @ index.js:1
t @ index.js:1
(anonymous) @ index.js:1
o @ index.js:1
A._invoke @ index.js:1
e.<computed> @ index.js:1
e.async @ index.js:1
j @ index.js:1
V @ index.js:1
(anonymous) @ index.js:1
(anonymous) @ index.js:1
a @ index.js:1

```

</p>
</details>
