import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;
const host = "0.0.0.0"; // Required for App Runner

// Serve the dist folder
app.use(express.static(path.join(__dirname, "dist")));

// Handle client-side routing
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, host, () => {
  console.log(`✅ Server is running on http://${host}:${port}`);
});

