import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/camera.scss";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CollectionsIcon from "@mui/icons-material/Collections";
const CustomCameraCapture = ({
  openLens,
  handleCloseLens,
}: {
  openLens: boolean;
  handleCloseLens: () => void;
}) => {
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [facingMode, setFacingMode] = useState<"user" | "environment">(
    "environment"
  );
  useEffect(() => {
    let cameraStream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        if (openLens) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode },
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            cameraStream = stream;
            videoRef.current.play();
          }
        }
      } catch (error) {
        console.error("Error accessing camera", error);
      }
    };

    // Start the camera when openLens is true
    startCamera();

    return () => {
      if (cameraStream) {
        const tracks = cameraStream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [openLens, facingMode]);

  useEffect(() => {
    if (imageDataUrl) handleSubmit();
  }, [imageDataUrl]);

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const width = 300;
    const height = 300;
    const x = (video.videoWidth - width) / 2;
    const y = (video.videoHeight - height) / 2;

    canvas.width = width;
    canvas.height = height;

    context?.drawImage(video, x, y, width, height, 0, 0, width, height);
    const dataUrl = canvas.toDataURL("image/png");
    setImageDataUrl(dataUrl);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageDataUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = () => {
    const safeImage = encodeURIComponent(imageDataUrl || "");
    navigate(`/search/${safeImage}`);
    setImageDataUrl(null);
    handleCloseLens();
  };

  return (
    <div className="camera">
      <div className="camera-icons">
        <IconButton className="camera-icons-back">
          <CloseIcon />
        </IconButton>
        <div className="camera-icons-heading">Google Lens</div>
      </div>

      {openLens && (
        <div className="camera-input">
          <video ref={videoRef} className="" playsInline muted autoPlay />
        </div>
      )}

      <div className="camera-actions">
        <div className="camera-actions-upload">
          <label htmlFor="file_upload">
            <IconButton component={"span"}>
              <CollectionsIcon />
            </IconButton>
          </label>
          <input
            type="file"
            accept="image/*"
            id="file_upload"
            onChange={handleFileUpload}
            className=""
          />
        </div>
        <IconButton onClick={captureImage} className="camera-actions-capture">
          <CameraAltIcon />
        </IconButton>
        <IconButton
          onClick={() =>
            setFacingMode((prev) => (prev === "user" ? "environment" : "user"))
          }
          className="camera-actions-capture"
        >
          <ChangeCircleIcon />
        </IconButton>
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default CustomCameraCapture;
