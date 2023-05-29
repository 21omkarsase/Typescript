import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todos"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send({ message: err.message });
})

app.listen(3000);