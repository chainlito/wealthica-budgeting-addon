<template>
  <b-card v-if="categories.length > 0">
    <BarChart :data="categories" />
  </b-card>
</template>

<script>
import BarChart from './ui/BarChart';

export default {
  components: {
    BarChart,
  },
  props: ['categories'],
};
</script>
