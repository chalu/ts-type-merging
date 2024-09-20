
declare module 'express-serve-static-core' {
    interface Request {
        userId?: string;
    }

	interface Response<
		ResBody = any,
		LocalsObj extends Record<string, any> = Record<string, any>,
		StatusCode extends number = number
	> {
        links(links: unknown): void;
		status(status: StatusCode): void;
		sendStatus(status: StatusCode): void;
	}

}
