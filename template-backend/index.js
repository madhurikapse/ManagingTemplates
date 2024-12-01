import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import env from 'dotenv'
import router from './routes/templateRoutes.js';


const app = express();
env.config();
app.use(express.json());
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGODB_URL;

app.use(cors());

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });


app.use("/api",router)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });