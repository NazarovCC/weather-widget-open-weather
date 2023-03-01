<script setup lang="ts">
import { message } from 'ant-design-vue';
import { IWeatherDataSorted } from '../models';
import AddLocation from './add-location.vue';
import ListLocation from './list-location.vue';

interface IEmit {
	(event: 'add', value: string): void;
	(event: 'delete', id: number): void;
	(event: 'drag-start', item: IWeatherDataSorted): void;
	(event: 'drop', item: IWeatherDataSorted): void;
	(event: 'escape'): void;
}

interface IProps {
	weatherList: IWeatherDataSorted[];
}

const emit = defineEmits<IEmit>();
const props = defineProps<IProps>();


const onAdd = (value: string) => {
	const isWeatherByCountry = props.weatherList.some((weather: IWeatherDataSorted) => weather.name === value)
	if (isWeatherByCountry) {
		message.error('Уже существует');
	} else {
		emit('add', value);
	}
};

const onDelete = (id: number) => {
	emit('delete', id);
};

const onDragStart = (item: IWeatherDataSorted) => {
	emit('drag-start', item)
}

const onDrop = (item: IWeatherDataSorted) => {
	emit('drop', item);
}
</script>

<template>
	<div class="settings">
		<div class="setting">
			<list-location 
				:weather-list="props.weatherList"
				@delete="onDelete"
				@drag-start="onDragStart"
				@drop="onDrop"
			/>
		</div>
		<div class="add-location">
			<add-location 
				@add="onAdd"
			/>
		</div>
	</div>
</template>

<style scoped>
	.settings {
		position: relative;
	}
	.setting {
		margin-bottom: 40px;
	}
	.header {
		position: absolute;
		right: 0;
	}
	.add-location {
		margin-top: 20px;
	}

</style>