import { WeatherFactory } from './weather-factory';
import { Weather } from './weather';


export async function createWeather(): Promise<Weather> {
	const factory = new WeatherFactory(import.meta.env.VITE_BASE_API);
	return factory.createWeather();
}

