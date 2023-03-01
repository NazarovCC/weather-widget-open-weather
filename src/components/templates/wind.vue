<template>
	<div class="wind">
		<div class="wind-icon" :style="{transform: `rotate(${getArrowDirection}deg)`}">
			<i class="fa-solid fa-location-arrow"></i>
		</div>
		<div>
			{{ getWindDescription }}
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IWindProps {
	speed: number;
	deg: number;
}

const props = defineProps<IWindProps>();

const getWindDescription = computed(() => {
	return `${props.speed}m/s ${getWindDirection.value}`;
});

const VECTOR_LIST = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];

const getWindDirection = computed(() => {
	return VECTOR_LIST[Math.round(props.deg/22.5) % 16];
});

const getArrowDirection = computed(() => {
	return props.deg - 22.5;
})


</script>

<style scoped>
.wind {
	display: flex;
	justify-content: space-between;
}
.wind-icon {
 /* transform: rotate(-90deg); */
 margin-right: 5px;
}
</style>