<script setup lang="ts">
import WidgetWeather from './components/widget-weather.vue';

</script>

<template>
  <div>
    <suspense>
      <widget-weather/>
    </suspense>
  </div>
</template>
