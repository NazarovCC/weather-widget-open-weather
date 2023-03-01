<template>
	<div class="visibility">
		<span>{{ getVisibility }}</span>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { fromMetresToKm } from '../../helpers/helpers-transfer';

interface IVisibilityProps {
	visibility: number;
}

const props = defineProps<IVisibilityProps>();

const getVisibility = computed(() => {
	return `Visibility: ${fromMetresToKm(props.visibility).toFixed(1)}km`;
});
</script>

<style></style>