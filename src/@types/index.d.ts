declare namespace Express {
	interface Request {
		userId?: string;
	}

	interface Response<
		ResBody = any,
		Locals extends Record<string, any> = Record<string, any>,
		StatusCode extends number = number,
	> extends http.ServerResponse,
			Omit<Response<ResBody, Locals, StatusCode>, "json"> {
		// remove, replace, redeclare stuff. yet to work
		json: never;
		status(statusCode: StatusCode): void;

		// add stuff, works so far
		added(param: string): this;
	}
}
