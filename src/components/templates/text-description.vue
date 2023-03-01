<template>
	<div class="text-description">
			{{getFullDescription}}
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { stringCapitalized } from '../../helpers/helpers-string';
import { fromKelvininToCelsius } from '../../helpers/helpers-transfer';

interface ITextDescriptionProps {
	feelsLike: number;
	description: string;
}

const props = defineProps<ITextDescriptionProps>();


const getFullDescription = computed(() => {
	return `Feels like ${getTemperatureCelsius.value}. Broken cloud. ${getDescription.value}`;
})

const getDescription = computed(() => {
	return stringCapitalized(props.description);
});

const getTemperatureCelsius = computed(() => {
	return fromKelvininToCelsius(props.feelsLike) + '\xB0C';
});

</script>

<style scoped>
.text-description{
	font-weight: 450;
}
</style>