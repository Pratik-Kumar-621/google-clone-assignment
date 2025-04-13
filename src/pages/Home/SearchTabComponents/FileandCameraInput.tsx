import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    let cameraStream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        if (openLens) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
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
  }, [openLens]);

  useEffect(() => {
    if (imageDataUrl) handleSubmit();
  }, [imageDataUrl]);

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Define capture area (you can customize this)
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
    <div className="p-6 max-w-lg mx-auto text-center">
      <button onClick={handleCloseLens}>CLose</button>
      <h2 className="text-2xl font-bold mb-4">Custom Camera UI</h2>

      {/* Display Camera */}
      {openLens && (
        <div className="relative w-[300px] h-[300px] mx-auto border-4 border-blue-600 rounded overflow-hidden">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            playsInline
            muted
            autoPlay
          />
          <div className="absolute inset-0 border-4 border-white pointer-events-none" />
        </div>
      )}

      {openLens && (
        <div className="mt-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="px-4 py-2 bg-gray-600 text-white rounded"
          />
        </div>
      )}

      {/* Buttons for Capture and Retake */}
      <div className="mt-4 flex justify-center gap-4">
        {openLens && (
          <button
            onClick={captureImage}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            📸 Capture
          </button>
        )}
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default CustomCameraCapture;
