<script setup async lang="ts">
import { v4 as uuidv4 } from 'uuid';
import { computed, ref } from 'vue';
import { IWeatherData, IWeatherDataSorted } from '../models';
import {createWeather } from '../services/https';
import Setting from './setting.vue';
import WeatherCard from './weather-card.vue';
import { message } from 'ant-design-vue';
import { IParamsWeather } from '../services/https/types';
import localStorageService from '../services/localStorageService/local-storage-service';


const weatherList = ref<Array<IWeatherDataSorted>>([]);
const currentWeather = ref<any>(null);
const isSettingComponent = ref(false);
const cities: string = localStorageService.getItem('cities') || '';

if (!cities) {
	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(async ({ coords }: any) => {
			const result = await initWeather({ lat: coords.latitude, lon: coords.longitude });
			mutateWeatherList(result);
		})
	}
} else {

	const citiesList = cities.split(',');

	for (let city of citiesList) {
		const result = await initWeather({q: city});
		mutateWeatherList(result);
	}
}

async function initWeather(props: IParamsWeather) {
	const weather = await createWeather();
	const weatherResult = await weather.get(props)
	return weatherResult;
}

const onAdd = async(value: string) => {
	try {
		const result = await initWeather({q: value});
		mutateWeatherList(result);
	} catch(e: any) {
		message.error(e.code);
	}
}

function mutateWeatherList(weather: IWeatherData): void {
	weatherList.value.push({
		...weather,
		order: uuidv4(),
	});
}

const onDelete = (id: number) => {
	weatherList.value = weatherList.value.filter((weather: IWeatherDataSorted) => weather.id !== id);
}

const onDragStart = (item: IWeatherDataSorted) => {
	currentWeather.value = item;
}

const onDrop = (item: IWeatherDataSorted) => {
	weatherList.value = weatherList.value.map((weather:IWeatherDataSorted) => {
		if (weather.id === item.id) {
			return {...weather, order: currentWeather.order}
		}

		if (weather.id === currentWeather.id) {
			return { ...weather, order: item.order }
		}
		return weather;
	})
}

const sortWeather = (a: IWeatherDataSorted, b: IWeatherDataSorted) => {
	if (a.order > b.order) {
		return 1;
	} 
	return -1;
}

const getSortedWeather = computed(() => {
	return weatherList.value.sort(sortWeather);
})

const onSettingClick = () => {
	if (isSettingComponent) {
		const citiesList: Array<string> = weatherList.value.map((weather: IWeatherDataSorted) => weather.name);
		if (citiesList.length === 0) {
			localStorageService.removeItem('cities');
		} else {
			localStorageService.setItem('cities', citiesList.join(','));
		}
			
	}
	isSettingComponent.value = !isSettingComponent.value;
}

</script>

<template>
		<div class="container">
			<div class="icon-setting" v-if="!cities" @click="onSettingClick">
				<i :class="isSettingComponent ? 'fa-solid fa-xmark' : 'fa-solid fa-gear'">
				</i>
			</div>
			<div v-if="!isSettingComponent">
				<div v-if="weatherList.length !== 0">
					<weather-card	
						v-for="weather in weatherList"
						:key="weather.id"
						:weather="weather"
					/>
				</div>
				<div v-else>
					<span>NO weather</span>
				</div>
			</div>
			<setting
				v-else 
				:weather-list="getSortedWeather"
				@delete="onDelete"
				@add="onAdd" 
				@drag-start="onDragStart"
				@drop="onDrop"
			/>
		</div>

</template>

<style scoped>
	.container {
		width: 250px;
		border: 1px solid gray;
		min-height: 40px;
		padding: 15px;
		position: relative;
	}
	.icon-setting {
		position: absolute;
		right: 15px;
		top: 15px;
		z-index: 20;
	}
	.icon-setting:hover {
		cursor: pointer;
	}
	.icon-setting i {
		width: 100%;
		height: 100%;
	}
	.slide-fade-enter-active {
  	transition: all .3s ease;
	}
	.slide-fade-leave-active {
  	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to {
		transform: translateX(10px);
		opacity: 0;
	}
	
</style>