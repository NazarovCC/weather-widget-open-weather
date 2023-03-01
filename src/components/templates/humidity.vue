<template>
	<div class="humidity">
		<span>{{ getHumidity }}</span>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';

	interface IHumidityProps {
		humidity: number;
	}

	const props = defineProps<IHumidityProps>();

	const getHumidity = computed(() => {
		return `Humidity: ${props.humidity}%`;
	});
</script>

<style>

</style>