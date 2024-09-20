import cors from "cors";
import express from "express";
import type { Request, Response } from "express-serve-static-core";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request: Request, response: Response) => {
	// this added field is fine
	console.log(request.userId);

	response
		.status(200)
        .links({ next: 'http://localhost:3000/next' });

});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
