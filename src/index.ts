import Express from "express";

const app = Express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("App is listening on port" + PORT));
