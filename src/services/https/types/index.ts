export interface IApiClient {
	get(endPoint: string, params?: any, signal?: AbortSignal): Promise<any>;
	post(endPoint: string, data?: any, signal?: AbortSignal): Promise<any>
};

export interface IParamsWeather {
	q?: string;
	lat?: number;
	lon?: number;
}

