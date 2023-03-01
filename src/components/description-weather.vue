<template>
	<div class="description-weather">
		<temperature 
			:icon-type="weather.weather[0].icon" 
			:temperature="weather.main.temp"
		/>
		<text-description
			:feels-like="weather.main.feels_like"
			:description="weather.weather[0].description"
		/>
		<div class="row">
			<div class="col">
				<wind
					:speed="weather.wind.speed"
					:deg="weather.wind.deg"
				/>
				<humidity :humidity="weather.main.humidity"/>
				<visibility :visibility="weather.visibility"/>
			</div>
			<div class="col">
				<pressure :pressure="weather.main.pressure"/>
				<dew-point/>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { IWeatherData } from '../models';
import Temperature from './templates/temperature.vue';
import TextDescription from './templates/text-description.vue';
import Wind from './templates/wind.vue';
import Humidity from './templates/humidity.vue';
import Visibility from './templates/visibility.vue';
import Pressure from './templates/pressure.vue';
import DewPoint from './templates/dew-point.vue';

interface IDescriptionWeatherProps {
		weather: IWeatherData;
}

const {weather} = defineProps<IDescriptionWeatherProps>();

</script>

<style scoped>
.description-weather {
	display: flex;
	flex-direction: column;
}
.row {
	display: flex;
	justify-content: space-between;
}
.col {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>