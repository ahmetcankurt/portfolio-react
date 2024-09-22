import { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import Drawing from './Drawing';
import Output from './Output';

const classifierUrl = `/portfolio-react/classifiers/model.json`;

const loadModel = async () => {
  try {
    const model = await tf.loadLayersModel(classifierUrl);
    return model;
  } catch (error) {
    console.error("Error loading model:", error);
  }
};

const App = () => {
  const [strokes, setStrokes] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [predictionProbability, setPredictionProbability] = useState(null); // Olasılıkları saklamak için
  const [model, setModel] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    loadModel().then(setModel);
  }, []);

  const endStroke = async () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    const imgData = canvas.toDataURL('image/png');

    const img = new Image();
    img.src = imgData;

    img.onload = async () => {
      const tensor = tf.browser.fromPixels(img)
        .toFloat()
        .resizeNearestNeighbor([28, 28])
        .mean(2)
        .expandDims(0)
        .expandDims(-1)
        .div(255.0);

      if (model) {
        const predictions = await model.predict(tensor).data();
        const topPrediction = predictions.indexOf(Math.max(...predictions));
        const topPredictionProbability = Math.max(...predictions);

        setPrediction(topPrediction);
        setPredictionProbability(topPredictionProbability);
      }
    };
  };

  const addStroke = (point) => {
    setStrokes([...strokes, [point]]);
    setIsDrawing(true);
  };

  const addStrokePos = (point) => {
    if (isDrawing) {
      setStrokes(strokes.map((stroke, idx) => (
        idx === strokes.length - 1 ? [...stroke, point] : stroke
      )));
    }
  };

  const clearCanvas = () => {
    setStrokes([]);
    setPrediction(null);
    setPredictionProbability(null);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div  style={{ textAlign: 'center'  }}>
      <div  >
        <Drawing
          strokes={strokes}
          isDrawing={isDrawing}
          addStroke={addStroke}
          addStrokePos={addStrokePos}
          endStroke={endStroke}
          canvasRef={canvasRef}
        />
      </div>
      <div>
        <Output prediction={prediction} probability={predictionProbability} />
        <button type="button" className='btn btn-primary  mt-0 px-5' style={{fontSize:30}}  onClick={clearCanvas}>Clear</button>
      </div>
    </div>
  );
};

export default App;
