import { ApiClient } from './api-client';


export class ApiClientFactory {
	constructor(
		private readonly baseUrl: string,
		private readonly headers: any = {}
	) {}

	public createClient(): ApiClient {
		return new ApiClient(this.baseUrl, this.headers);
	}
}