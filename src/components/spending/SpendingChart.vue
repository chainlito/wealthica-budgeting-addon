<template>
  <div>
    <div v-if="categories.length > 0">
      <D3PieChart :config="chart_config" :datum="categories">
      </D3PieChart>
    </div>
  </div>
</template>

<script>
import { D3PieChart } from 'vue-d3-charts';

export default {
  components: {
    D3PieChart,
  },
  props: {
    categories: {
      type: Array,
    },
  },
  data() {
    return {
      chart_config: {
        key: 'category',
        value: 'amount',
        radius: {
          inner: 80,
          outter: 90,
          padding: 0.03,
          round: 20,
        },
        color: {
          scheme: 'schemePaired',
        },
      },
    };
  },
};
</script>
