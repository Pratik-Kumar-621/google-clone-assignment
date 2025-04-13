import { useEffect, useRef, useState } from "react";

const CustomCameraCapture = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (error) {
        console.error("Error accessing camera", error);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

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

  return (
    <div className="p-6 max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Custom Camera UI</h2>

      {!imageDataUrl ? (
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
      ) : (
        <img
          src={imageDataUrl}
          alt="Captured"
          className="mx-auto rounded shadow-lg"
        />
      )}

      <div className="mt-4 flex justify-center gap-4">
        {!imageDataUrl && (
          <button
            onClick={captureImage}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            📸 Capture
          </button>
        )}

        {imageDataUrl && (
          <button
            onClick={() => setImageDataUrl(null)}
            className="px-4 py-2 bg-gray-600 text-white rounded"
          >
            🔄 Retake
          </button>
        )}
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default CustomCameraCapture;
