
import { Page, Navbar, Link, Block } from "framework7-react";

export default ({  }) => {

	
let mediaRecorder;
let chunks = [];
let fileOfBlob;
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    console.log("getUserMedia supported.");
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder = new MediaRecorder(stream);
   
        mediaRecorder.ondataavailable = function (e) {
          chunks.push(e.data);
          	
            if (mediaRecorder.state == "inactive") {
                const blob = new Blob(chunks);
            
                 fileOfBlob = new File([blob], "audio.wav", {
                type: "audio/wav",
                });
            }
        };
      })
      .catch((err) => {
        console.error(`The following getUserMedia error occurred: ${err}`);
      });
  } else {
    console.log("getUserMedia not supported on your browser!");
  }


const start = ()=>
{
    mediaRecorder.start();
    console.log(mediaRecorder.state);
    console.log("recorder started");
};
const stop = ()=>
{
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
};
// send the chunks to openai whisper api
const transcript = ()=>
{
const formData = new FormData();

formData.append("model", "whisper-1");
formData.append("response_format", "json");
formData.append("language", "en");
formData.append("file", fileOfBlob);
fetch(
  "https://cm633.fluentgpt.app/openai/v1/audio/transcriptions",
  {
    method: "POST",
    headers: {
      Authorization: "Bearer cm633-05-2023-c",
    },
    body: formData,
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
};
  return (
    <Page>
      <Navbar title="Recorder" backLink="Back">
       
      </Navbar>
      <Block>
      <Link slot="left" onClick={start}>
          Start
       </Link>
       <Link slot="right" onClick={stop}>
          Stop
       </Link>
       <Link slot="right" onClick={transcript}>
            Transcript
       </Link>
      </Block>
      </Page>
);
}