import MicRecorder from "mic-recorder-to-mp3";
import { useEffect, useState } from "react";

function AudioRecorder() {
  const Mp3Recorder = new MicRecorder();
  const [recorderState, setRecorderState] = useState({
    isRecording: false,
    blobURL: "",
    isBlocked: false,
  });

  const start = () => {
    if (recorderState.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          setRecorderState({ ...recorderState, isRecording: true });
        })
        .catch((e: Error) => console.error(e));
    }
  };

  const stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]: [buffer: any, blob: any]) => {
        const blobURL = URL.createObjectURL(blob);
        setRecorderState({ ...recorderState, blobURL, isRecording: false });
      })
      .catch((e: Error) => console.error(e));
  };

    useEffect(() => {
      navigator.getUserMedia(
        { audio: true },
        () => {
          console.log("Permission Granted");
          setRecorderState({ ...recorderState, isBlocked: false });
        },
        () => {
          console.log("Permission Denied");
          setRecorderState({ ...recorderState, isBlocked: true });
        }
      );
    }, []);

  return (
    <div className="container">
      <div className="buttons">
        <button
          className="button is-danger"
          onClick={start}
          disabled={recorderState.isRecording}
        >
          Record
        </button>
        <button
          className="button is-info"
          onClick={stop}
          disabled={!recorderState.isRecording}
        >
          Stop
        </button>
        <audio src={recorderState.blobURL} />
      </div>
    </div>
  );
}

export default AudioRecorder;
