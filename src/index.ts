import cors from "cors";
import express from "express";
import type { Request, Response } from "express-serve-static-core";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, response: Response) => {
	// this added field is fine
    console.log(req.userId);

    response
        .status(200)
        .added('something')
        .json({ message: 'Hello!' })
        .added('something else');

    // since src/@types/index.d.ts sets .status() to return void
    // I was hoping we should not be able to call .added()
    // Also, the .json() should not be callable nor its return type
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
