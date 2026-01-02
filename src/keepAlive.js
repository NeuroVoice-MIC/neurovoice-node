import axios from "axios";

const SERVICE_URL = "https://YOUR-NODE-SERVICE.onrender.com/health";

const PING_INTERVAL = 5 * 60 * 1000; // 5 minutes

console.log("🫀 Keep-alive service started");

setInterval(async () => {
  try {
    const res = await axios.get(SERVICE_URL);
    console.log(`✅ Ping OK: ${res.status}`);
  } catch (err) {
    console.error("❌ Ping failed:", err.message);
  }
}, PING_INTERVAL);
