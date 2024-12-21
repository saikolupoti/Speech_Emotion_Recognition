import React, { useState, useEffect } from "react";
import { AudioRecorder } from 'react-audio-voice-recorder';
import WavEncoder from 'wav-encoder';
import './App.css';
import MicIcon from '@mui/icons-material/Mic';
import CircularProgress from '@mui/material/CircularProgress';

function AudioRecorder1() {
  const [data, setData] = useState({});
  const [b, setb] = useState(false);
  const [upload, setUpload] = useState(false);

  const fetchData = async () => {
    console.log("FetchData");
    try {
      
      let response = await fetch('https://project-fall-sem-backend.vercel.app/fetchData');
      let result = await response.json();
      while (result.ready == 0) {
        console.log("Loapala",result.ready);
        response = await fetch('https://project-fall-sem-backend.vercel.app/fetchData');
        result = await response.json();
      }
      setUpload(false);
      setData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const temp = async () => {
    console.log("HERE: ");
    await fetch('https://project-fall-sem-backend.vercel.app/updateData', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "ready": false, "data": [] }),
    });
  };
  
  useEffect(() => {
    temp();
  }, []);

  const addAudioElement = async (blob) => {
    const arrayBuffer = await blob.arrayBuffer();
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const channels = audioBuffer.numberOfChannels === 1
      ? [audioBuffer.getChannelData(0)]
      : [audioBuffer.getChannelData(0), audioBuffer.getChannelData(1)];

    const wavData = await WavEncoder.encode({
      sampleRate: audioBuffer.sampleRate,
      channelData: channels,
    });

    const wavBlob = new Blob([wavData], { type: 'audio/wav' });
    const url = URL.createObjectURL(wavBlob);

    setUpload(true);
    if (!b) {
      const audio = document.createElement("audio");
      audio.src = url;
      audio.controls = true;
      audio.className = "audio-element";  // Add class for styling
      document.getElementById("audio-player").appendChild(audio);
      setb(true);
    } else {
      document.getElementById("audio-player").getElementsByTagName('audio')[0].src = url;
    }
    await temp();
    setData({ "ready": false, "data": [] });
    fetchData();
    const link = document.createElement('a');
    link.href = url;
    link.download = 'recording.wav';
    // link.click();
  };

  return (
    <>
    <div className="right-box">
      {/* <div className="head-right">Team Members</div> */}
      <div>Nalam Guna Sri Krishna - 21BCE2552</div>
      <div>Kolupoti Sai Prakash - 21BCE2920</div>
      <div>Bala Mahendra Pulivarthi - 21BCE3073</div>
    </div>
    <div className="app-container">
      <div className="header">Record Your Voice</div>
      <p className="subtext">We will guess your mood!</p>
      <div className="recorder">
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
          }}
          downloadOnSavePress={false}
        >
          <MicIcon fontSize="large" style={{ color: '#3f51b5', cursor: 'pointer' }} />
        </AudioRecorder>
      </div>
      <div className="data-display">
        <h3 className="emotion-header">Possible Emotion Predicted</h3>
        {data.ready == 1 ? (
          <ul className="emotion-list">
            {data.data.map((emotion, index) => (
              <li key={index} className="emotion-item">{emotion}</li>
            ))}
          </ul>
        ) : (
          upload ? (
            <CircularProgress color="warning" className="loader" />
          ) : (
            <div className="no-data">Please record your data.</div>
          )
        )}
      </div>
      <div id="audio-player" className="audio-player"></div>
    </div>
    </>
  );
}

export default AudioRecorder1;
