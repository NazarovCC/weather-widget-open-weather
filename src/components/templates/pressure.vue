<template>
	<div class="pressure">
		<div class="pressure-icon">
			<i class="fa-brands fa-cloudscale"></i>
		</div>
		<div>
			{{ getPressureDescription }}
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IPressureProps {
	pressure: number;
}

const props = defineProps<IPressureProps>();

const getPressureDescription = computed(() => {
	return `${props.pressure}hPa`
});

</script>

<style scoped>
.pressure {
	display: flex;
	justify-content: left;
}

.pressure-icon {

}
</style>