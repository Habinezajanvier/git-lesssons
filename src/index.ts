import Express from "express";
import { Request, Response } from "express";

const app = Express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Welcome to our API"})
})

app.listen(PORT, () => console.log("App is listening on port" + PORT));
