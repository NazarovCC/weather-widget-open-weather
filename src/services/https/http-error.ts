export class HttpError{
	constructor(private message: string) {}

	public getErrorMessage(): string {
		return this.message;
	}
}