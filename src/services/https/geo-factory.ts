import { ApiClientFactory } from './api-client-factory';
import { Geo } from './geo';


export class GeoFactory {
	private readonly apiClientFactory: ApiClientFactory;

	constructor(baseUrl: string) {
		this.apiClientFactory = new ApiClientFactory(
			baseUrl + import.meta.env.VITE_GEO_URL_TAIL,
		)
	}

	public createGeo(): Geo {
		return new Geo(this.apiClientFactory.createClient());
	}
}

