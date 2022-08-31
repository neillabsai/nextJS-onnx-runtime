import type { NextPage } from "next";
import { InferenceSession } from "onnxruntime-web";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    const initModel = async () => {
      try {
        const URL: string = "./_next/static/chunks/pages/model.onnx";

        const session = await InferenceSession.create(URL);
        console.log("Inference session here:", session);
      } catch (e) {
        console.log(e);
      }
    };
    initModel();
  }, []);

  return (
    <div className="App">Check the console for the ONNX model results</div>
  );
};

export default Home;
