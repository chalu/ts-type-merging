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
		.added("something") // <- should be flagged since status() returns void ?
		.json({ message: "Hello!" }); 
        // ^ should not be callable since it was "omitted" and "never-ed" ?
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
