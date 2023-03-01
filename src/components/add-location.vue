<script setup lang="ts">
import { ref } from 'vue';
import { message } from 'ant-design-vue';


interface IEmit {
	(event: 'add', value: string): void;
};

const valueLocation = ref('');

const emit = defineEmits<IEmit>();

const onAddLocation = () => {
	if (valueLocation.value) {
		emit('add', valueLocation.value);
		valueLocation.value = '';
	} else {
		message.error('Введите название города');
	}
	
}; 

</script>

<template>
	<div class="add-location">
		<h4 class="add-location-header">Add location:</h4>
		<div class="add-location-body">
			<a-input v-model:value="valueLocation" placeholder="Название города" />
			<button class="add-button" @click="onAddLocation">
				<i class="fa-solid fa-arrow-turn-down"></i>
			</button>
		</div>
	</div>
</template>

<style scoped>
	.add-location {
		display: flex;
		flex-direction: column;
	}
	.add-location-header {
		margin-bottom: 5px;
	}
	.add-location-body {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.add-button {
		width: 30px;
		background-color: white;
		border: none;
	}

	.add-button i {
		transform: rotate(90deg);
	}

	.add-button:hover {
		cursor: pointer;
	}

</style>