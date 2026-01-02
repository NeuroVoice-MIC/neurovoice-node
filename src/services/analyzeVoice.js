import axios from "axios";
import FormData from "form-data";
import fs from "fs";

const ML_URL = "https://neurovoice-ml.onrender.com/predict";

export async function analyzeVoice(wavFilePath) {
  const form = new FormData();
  form.append("file", fs.createReadStream(wavFilePath));

  const response = await axios.post(ML_URL, form, {
    headers: form.getHeaders(),
    timeout: 1200000, // ML is slow — allow it
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });

  return response.data;
}