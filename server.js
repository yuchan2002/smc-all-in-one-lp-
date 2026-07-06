const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public"), { extensions: ["html"] }));

// ヘルスチェック(Railway用)
app.get("/healthz", (_, res) => res.send("ok"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SMC LP running on :${PORT}`));
