<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { IWeatherDataSorted} from '../models';
import ListLocationItem from './list-location-item.vue';


interface IListLocationProps {
	weatherList: IWeatherDataSorted[];
}

interface IListLocationEmits {
	(event: 'delete', id: number): void;
	(event: 'drag-start', item: IWeatherDataSorted): void;
	(event: 'drop', item: IWeatherDataSorted): void;
}

const valueLocation = ref('');
const hamburgerElement = ref<Element | null>(null);

onMounted(() => {
	hamburgerElement.value = document.querySelector('.list-location-item .hamburger');
});

const props = defineProps<IListLocationProps>();
const emit = defineEmits<IListLocationEmits>();

const onDelete = (id: number) => {
	emit('delete', id);
};

const onDragStart = (event: DragEvent, item: IWeatherDataSorted) => {
	if (event.target == hamburgerElement.value) {
		emit('drag-start', item);
	}
};

const onDrop = (event: DragEvent, item: IWeatherDataSorted) => {
	emit('drop', item)
};
</script>

<template>
	<div class="list-location">
		<h4 class="list-location-header">Settings</h4>
		<div class="container-droppable">
			 <transition-group name="list" tag="p">
				<list-location-item 
					v-for="weather in weatherList"
					:key="weather.id"
					:weather="weather"
					@delete="onDelete"
					@dragstart="onDragStart($event, weather)"
					@drop.prevent="onDrop($event, weather)"
				/>
				</transition-group>
		</div>
	</div>
</template>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 1s;
}
</style>