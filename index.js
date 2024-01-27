// const { required } = require("nodemon/lib/config");

let btn = document.createElement("button");
btn.innerText = "cpture";
let body = document.querySelector("body");
document.body.append(btn);
btn.addEventListener("click", async ()=>{
    console.log(navigator);
    let stream = await navigator.mediaDevices.getDisplayMedia();
    let recorder = new MediaRecorder(stream);
    recorder.start();
    console.log("started");
    const [video] = stream.getVideoTracks();
    console.log("video is recording");
    video.addEventListener("ended" , ()=>{
        recorder.stop();
        console.log("stop recording");
    });
    recorder.addEventListener("dataavailable", (x)=>{
        let a = document.createElement("a");
        a.href = URL.createObjectURL(x.data);
        console.log(x.data);
        a.download = 'junaid.mp4';
        // a.click();

    });
});
