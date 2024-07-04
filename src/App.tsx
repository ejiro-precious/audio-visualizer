import * as React from 'react';
import { useState } from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import {LiveAudioVisualizer} from "./component/LiveAudioVisualizer";
import {AudioVisualizer} from "./component/AudioVisualizer";

function App(){
  const [blob, setBlob] = useState<Blob>();
  const recorder = useAudioRecorder();

  return (
      <div>
        <AudioRecorder
            onRecordingComplete={setBlob}
            recorderControls={recorder}
        />

        {recorder.mediaRecorder && (
            <LiveAudioVisualizer
                mediaRecorder={recorder.mediaRecorder}
                width={200}
                height={75}
                fftSize={8192}
                gap={1}
                maxDecibels={-10}
                minDecibels={-80}
                smoothingTimeConstant={0.4}
            />
        )}

        {blob && (
            <AudioVisualizer
                blob={blob}
                width={500}
                height={75}
                barWidth={1}
                gap={0}
                barColor={'#f76565'}
            />
        )}

        {blob && (
            <AudioVisualizer
                blob={blob}
                width={500}
                height={75}
                barWidth={3}
                gap={0}
                barColor={'lightblue'}
            />
        )}
      </div>
  );
}

export default App;
