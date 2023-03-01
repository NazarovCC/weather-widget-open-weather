export const fromKelvininToCelsius = (kelvin: number, countAfterComma = 0) => {
	return (kelvin - 273.15).toFixed(countAfterComma);
};

export const fromMetresToKm = (metres: number): number => {
	return metres/1000;
}