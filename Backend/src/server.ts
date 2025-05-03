import cors from "cors";
import * as dotenv from 'dotenv';
import express from "express";
import router from "./routes/index.js";
import '../prisma/updateMatches';


dotenv.config();

const app = express();

app.use(express.json());

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(cors({
    origin: [FRONTEND_URL],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
}));


app.use(router)

const PORT = process.env.PORT || 5000


app.listen(PORT, () => (
    console.log("Http server running! on port " + PORT)
));

