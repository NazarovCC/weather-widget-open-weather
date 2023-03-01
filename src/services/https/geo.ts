import { IGeo } from '../../models';
import { IApiClient, IParamsGeo } from './types';

export class Geo {
	constructor(private readonly apiClient: IApiClient) {}

	public async get(params?: IParamsGeo): Promise<IGeo[]> {
		return this.apiClient.get("", {
			...params,
			appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY});
	}

}