import React, { useRef, useEffect, useState, useCallback } from "react";
import * as tf from "@tensorflow/tfjs";

function TrashScan() {
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  const [model, setModel] = useState(null);
  const [labels, setLabels] = useState([]);
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState(0);
  const [mode, setMode] = useState("webcam");
  const [imageURL, setImageURL] = useState("");

  // Load model dan label
  useEffect(() => {
    const loadModel = async () => {
      try {
        const graphModel = await tf.loadGraphModel(
          "/tfjs_model_fix/model.json"
        );
        setModel(graphModel);
        console.log("Graph model loaded");
      } catch (err) {
        console.error("Gagal load model:", err);
      }
    };

    const loadLabels = async () => {
      const res = await fetch("/tfjs_model_fix/labels.txt");
      const text = await res.text();
      setLabels(text.trim().split("\n"));
    };

    loadModel();
    loadLabels();
  }, []);

  // Prediksi dari kamera (dibungkus useCallback supaya aman sebagai dependency)
  const predictFromWebcam = useCallback(async () => {
    if (!videoRef.current || !model) return;

    const video = videoRef.current;
    if (video.readyState < 2) {
      requestAnimationFrame(predictFromWebcam);
      return;
    }

    const tensor = tf.browser
      .fromPixels(video)
      .resizeBilinear([224, 224])
      .toFloat()
      .reverse(-1)
      .sub(tf.tensor([103.939, 116.779, 123.68]))
      .expandDims();

    const predictionTensor = await model.predict(tensor);
    const data = await predictionTensor.data();
    const maxIndex = data.indexOf(Math.max(...data));

    setPrediction(labels[maxIndex]);
    setConfidence((data[maxIndex] * 100).toFixed(2));

    requestAnimationFrame(predictFromWebcam);
  }, [model, labels]);

  // Mulai webcam jika mode webcam aktif
  useEffect(() => {
    if (mode === "webcam" && model) {
      const enableCam = async () => {
        if (!navigator.mediaDevices?.getUserMedia) {
          alert("Browser tidak mendukung kamera.");
          return;
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        const video = videoRef.current;
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          video.play();
          predictFromWebcam();
        };
      };

      enableCam();
    }
  }, [mode, model, predictFromWebcam]); // ✅ Tambahkan predictFromWebcam ke dependencies

  // Prediksi dari upload gambar
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file && model) {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.src = url;
      setImageURL(url); // Set ke state agar bisa ditampilkan

      img.onload = async () => {
        imageRef.current.src = img.src;

        const tensor = tf.browser
          .fromPixels(img)
          .resizeBilinear([224, 224])
          .toFloat()
          .reverse(-1)
          .sub(tf.tensor([103.939, 116.779, 123.68]))
          .expandDims();

        const predictionTensor = await model.predict(tensor);
        const data = await predictionTensor.data();
        const maxIndex = data.indexOf(Math.max(...data));

        setPrediction(labels[maxIndex]);
        setConfidence((data[maxIndex] * 100).toFixed(2));
      };
    }
  };

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-4">
        TrashScan: mengetahui jenis sampahmu hanya dalam hitungan detik.
      </h1>
      <p>
        Teknologi klasifikasi berbasis AI, membantu kamu membedakan jenis sampah
        organik, anorganik, dan B3 dengan cepat dan akurat.
      </p>

      {/* Mode switch */}
      <div className="mb-4">
        <button
          onClick={() => setMode("webcam")}
          className={`px-4 py-2 mr-2 rounded ${
            mode === "webcam" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Webcam
        </button>
        <button
          onClick={() => setMode("upload")}
          className={`px-4 py-2 rounded ${
            mode === "upload" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Upload
        </button>
      </div>

      {/* Webcam or Upload Mode */}
      {mode === "webcam" ? (
        <video
          ref={videoRef}
          width="700"
          height="350"
          autoPlay
          muted
          className="rounded-lg border shadow"
        />
      ) : (
        <div className="flex flex-col items-center">
          <label className="mb-2 font-medium text-gray-700">
            Pilih gambar sampah untuk diklasifikasikan:{" "}
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="mb-4 px-4 py-2 border rounded-lg shadow-sm"
          />
          {imageURL && (
            <img
              src={imageURL}
              ref={imageRef}
              alt="preview"
              width="700"
              height="350"
              className="rounded-lg border shadow-md"
            />
          )}
        </div>
      )}

      {/* Prediction Result */}
      <div className="mt-6 text-xl font-semibold text-green-700">
        {prediction && `Prediksi: ${prediction} (${confidence}%)`}
      </div>
    </div>
  );
}

export default TrashScan;
