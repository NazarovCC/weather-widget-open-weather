import { IWeatherData } from '../../models';
import { IApiClient, IParamsWeather } from './types';

export class Weather {
	constructor(private readonly apiClient: IApiClient) {}

	public async get(params?: IParamsWeather): Promise<IWeatherData> {
		return this.apiClient.get("", {
			...params,
			appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY});
	}

}