// SpeechRecognition.js
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechRecognitionComponent = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const startListeningHandler = () => {
    SpeechRecognition.startListening();
  };

  const stopListeningHandler = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <div>
      <h2>Speech Recognition</h2>
      <button onClick={startListeningHandler} disabled={listening}>
        Start Listening
      </button>
      <button onClick={stopListeningHandler} disabled={!listening}>
        Stop Listening
      </button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechRecognitionComponent;
