import axios from "axios";

const ML_HEALTH_URL = "https://neurovoice-ml.onrender.com/";

setInterval(async () => {
  try {
    await axios.get(ML_HEALTH_URL);
    console.log("🔥 ML service kept warm");
  } catch {
    console.warn("⚠️ ML keep-alive ping failed");
  }
}, 5 * 60 * 1000); // every 5 minutes