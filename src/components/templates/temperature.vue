<template>
	<div class="temperature-container">
		<img :src="`http://openweathermap.org/img/wn/${props.iconType}@2x.png`" alt="opis">
		<div class="temperature">
			<span class="heading">{{ getTemperatureCelsius }}&#8451;</span>	
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { fromKelvininToCelsius } from '../../helpers/helpers-transfer';

interface ITemperatureProps {
	iconType: string;
	temperature: number;
}

const props = defineProps<ITemperatureProps>()

const getTemperatureCelsius = computed(() => {
	return fromKelvininToCelsius(props.temperature);
});
</script>

<style scoped>
.temperature-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
}
.heading {
	font-size: 30px;
	font-weight: bold;
	margin-right: 8pt;
}
</style>