import { Geo } from './geo';
import { GeoFactory } from './geo-factory';
import { WeatherFactory } from './weather-factory';
import { Weather } from './weather';



export async function createGeo(): Promise<Geo> {
	const factory = new GeoFactory(import.meta.env.VITE_BASE_API);
	return factory.createGeo();
}

export async function createWeather(): Promise<Weather> {
	const factory = new WeatherFactory(import.meta.env.VITE_BASE_API);
	return factory.createWeather();
}

