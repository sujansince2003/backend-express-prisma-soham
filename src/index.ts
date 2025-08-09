

import express, { Request, Response } from "express"
import cors from "cors"
import userRouter from "./routes/user.route";
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/api/user", userRouter);


app.get("/", (req: Request, res: Response) => {
    res.json({ msg: "hello soham" })
})

app.listen(8000, () => {
    console.log("BACKEND SERVER::running in port  8000. visit: http://localhost:8000")
})