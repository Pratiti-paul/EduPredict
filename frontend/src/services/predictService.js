import axios from "axios";

export const getPrediction = async (data) => {
  const response = await axios.post(
    "http://localhost:5001/api/predict",
    data
  );
  return response.data;
};
