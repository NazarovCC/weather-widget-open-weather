<script setup lang="ts">
import { computed } from 'vue';
import { IWeatherDataSorted } from '../models';
import DescriptionWeather from './description-weather.vue';


interface IWeatherCardEmit {
	(event: 'add', value: string): void;
}
interface IWeatherCardProps {
	weather: IWeatherDataSorted;
}


const emit = defineEmits<IWeatherCardEmit>();
const {weather} = defineProps<IWeatherCardProps>();

const getWeatherTitle = computed(() => {
	return `${weather?.name
}, ${weather?.sys?.country}`;
});

</script>

<template>
	<div class="weather-card">
		<div class="weather-card-header">
			<h5>{{ getWeatherTitle }}</h5>
		</div>
		<div class="weather-card-body">
			<description-weather :weather="weather" />	
		</div>
	</div>
</template>

<style scoped>
.weather-card {
	display: flex;
	flex-direction: column;
	color: #48484a;
	margin-bottom: 40px;
}
.weather-card:last-child {
	margin-bottom: 0;
}
.current-temp {
	display: flex;
	flex-direction: row;
	white-space: nowrap;
}
.weather-card-header h5 {
	margin-bottom: 10px;
	font-weight: bold;
}
.heading {
	font-size: 36px;
	font-weight: 100;
	margin-right: 8pt;
}
.bold {
	font-weight: 700;
}
.weather-items {
	margin-top: 4pt;
	padding-left: 16pt;
	padding-right: 16px;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	line-height: 20px;
}
</style>