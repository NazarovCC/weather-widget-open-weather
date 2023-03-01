<script setup lang="ts">
import { computed, ref } from 'vue';
import { IWeatherData } from '../models';


interface IListLocationItemProps {
	weather: IWeatherData;
}

interface IListLocationItemEmit {
	(event: 'delete', id: number): void;
}

const valueLocation = ref('');

const props = defineProps<IListLocationItemProps>();
const emit = defineEmits<IListLocationItemEmit>();

const getCityByWeather = computed(() => {
	return props.weather?.name;
});

const getCountryByWeather = computed(() => {
	return props.weather?.sys?.country
});

const getListItem = computed(() => {
	return `${getCityByWeather.value}, ${getCountryByWeather.value}`;
});

const onDeleteItem = () => {
	emit('delete', props.weather.id);
}

</script>

<template>
	<div class="list-location-item">
		<div class="hamburger" draggable="true">
			<i class="fa-solid fa-bars"></i>
		</div>
		<div class="item">
			<span>{{ getListItem }}</span>
		</div>
		<div class="delete-icon" @click="onDeleteItem">
			<i class="fa-regular fa-trash-can"></i>
		</div>
	</div>
</template>

<style scoped>
.list-location-item {
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 20px;
	padding: 6px 5px 6px 5px;
	background-color: rgba(128, 128, 128, 0.192);
	align-items: center;
}
.item {
	flex: 1;
	font-size: 0.9em;
}
.hamburger {
	margin-right: 5px;
}
.hamburger:hover {
	cursor: pointer;
}
.delete-icon:hover {
	cursor: pointer;
}

</style>