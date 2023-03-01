import { ApiClientFactory } from './api-client-factory';
import { Weather } from './weather';


export class WeatherFactory {
	private readonly apiClientFactory: ApiClientFactory;

	constructor(baseUrl: string) {
		this.apiClientFactory = new ApiClientFactory(
			baseUrl + import.meta.env.VITE_WEATHER_DATA_URL_TAIL,
		)
	}

	public createWeather(): Weather {
		return new Weather(this.apiClientFactory.createClient());
	}
}
