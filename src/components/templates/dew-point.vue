<template>
	<div class="dew-point">
		<span>{{ getDewPoint }}</span>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


const getDewPoint = computed(() => {
	return 'Dew point: 0\xB0C';
});
</script>

<style></style>