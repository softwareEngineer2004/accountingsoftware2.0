import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(helmet());

app.get("/", (req:Request, res:Response) => {
    res.status(200).json({message: "Server is running"});
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
