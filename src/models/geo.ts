export interface IGeo {
	name: string;
	locale_names: {
		[key: string]: string;
	}
	lat: number;
	lon: number;
	country: string;
	state: string;
};