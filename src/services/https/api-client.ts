import axios, {AxiosHeaders, AxiosInstance, AxiosRequestConfig} from 'axios';
import { IApiClient } from './types';
import { HttpError } from './http-error';

export class ApiClient implements IApiClient{
	constructor(
		private readonly baseUrl: string,
		private readonly headers: AxiosHeaders,
	) {}

	public async get(endPoint: string = "", params?: Record<string,string>, signal?: AbortSignal): Promise<any> {
		try {
			const client = this.createClient(params);
			const response = await client.get(endPoint, { signal });
			return response.data;
		} catch (error: any) {
			this.handleError(error);
		}
	}

	public async post(endPoint: string = "", data?: any, signal?: AbortSignal): Promise<any> {
		try {
			const client = this.createClient();
			const response = await client.post(endPoint, data, { signal });
			return response.data;
		} catch (error: any) {
			this.handleError(error);
		}
	}

	private createClient(params: object = {}): AxiosInstance {
		const config: AxiosRequestConfig = {
			baseURL: this.baseUrl,
			headers: this.headers,
			params,
		}
		return axios.create(config);
	}

	private handleError(error: any): never {
		if (!error.response) {
			throw new HttpError(error.message)
		} else {
			throw error;
		}
	}
}