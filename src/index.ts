import cors from "cors";
import express from "express";
import type { Request, Response } from "express-serve-static-core";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, response: Response) => {
	// this added field is fine
    console.log(req.userId);

    response.status(200).added('something').json({ message: 'Hello!' });
    // since src/@types/index.d.ts sets .status() to return void
    // I was hoping we should not be able to call .added()
    
    // Also, from the line below, the return of .json() should not be callable
    // response.status(200).json({ message: 'Hello!' }).added('something');
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
