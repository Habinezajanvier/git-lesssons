import Express from "express";
import { Request, Response } from "express";
import morgan from "morgan";

const app = Express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to our API" });
});
app.use(morgan("combined"));

app.listen(PORT, () => console.log("App is listening on port" + PORT));
