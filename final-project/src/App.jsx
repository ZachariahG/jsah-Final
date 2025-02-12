import React from "react";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import mongoRouter from "./routes/MongoRouter";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", mongoRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const App = () => <AppRouter />;

export default App;
