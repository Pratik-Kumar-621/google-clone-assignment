import { IconButton, SwipeableDrawer } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import DotLoader from "../DotLoader";
import MicIcon from "@mui/icons-material/Mic";

const VoiceDialog = ({ openVoice, handleOpenVoice, handleCloseVoice }: any) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [retry, setRetry] = useState(false);
  const audioRef = useRef<any>(null);

  useEffect(() => {
    if (openVoice) {
      setText("");

      setRetry(false);
      startRecording();
    } else {
      stopRecording();
    }
    return () => {
      stopRecording();
    };
  }, [openVoice]);

  const handleDrawerClose = () => {
    handleCloseVoice();
  };

  const startRecording = () => {
    // ts-ignore
    const audioRecord =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!audioRecord) alert("Audio record not supported in this browser.");

    const audio = new audioRecord();
    audioRef.current = audio;

    audio.lang = "en-US";
    audio.interimResults = false;

    audio.onstart = () => {
      setIsRecording(true);
      setRetry(false);
    };

    audio.onend = () => {
      setIsRecording(false);
    };

    audio.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
      console.log(transcript);

      if (transcript === "") setRetry(true);
      setTimeout(() => {
        setIsRecording(false);
        handleCloseVoice();
        navigate(`/search/${encodeURIComponent(transcript)}`);
        setText("");
      }, 800);
    };

    audio.onerror = () => {
      setIsRecording(false);
      setRetry(true);
    };

    audio.start();
  };
  const stopRecording = () => {
    if (audioRef.current) {
      audioRef.current.stop();
      audioRef.current = null;
    }
    setIsRecording(false);
  };

  return (
    <SwipeableDrawer
      open={openVoice}
      onOpen={handleOpenVoice}
      onClose={handleDrawerClose}
      anchor="bottom"
      PaperProps={{
        sx: {
          width: "auto",
          maxWidth: "700px",
          margin: "0 auto",
        },
      }}
    >
      <div className="voicesearch-drawer p-6">
        <IconButton
          onClick={() => handleDrawerClose()}
          className="voicesearch-drawer-close"
        >
          <CloseIcon />
        </IconButton>
        <div className="voicesearch-drawer-text">
          {isRecording ? (
            <>
              <div className="voicesearch-drawer-text-placeholder">
                Listening <DotLoader />
              </div>
            </>
          ) : (
            <>
              {text ? (
                <>{text}</>
              ) : (
                <>
                  {" "}
                  Sorry but we are not able to capture your voice, please click
                  on mike to try again
                </>
              )}
            </>
          )}
        </div>
        {retry && (
          <div className="voicesearch-drawer-retry">
            Sorry but we are not able to capture your voice, please click on
            mike to try again
          </div>
        )}
        <div
          className="voicesearch-drawer-mike"
          style={{ cursor: "pointer" }}
          onClick={() => {
            startRecording();
          }}
        >
          <MicIcon sx={{ fontSize: "80px" }} />
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default VoiceDialog;
