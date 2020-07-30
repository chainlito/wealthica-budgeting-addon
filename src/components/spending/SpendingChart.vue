<template>
  <div>
    <div v-if="categories.length > 0">
      <D3PieChart :config="chart_config" :datum="categories" />
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
      chart_data: [{
        amount: 1860.22,
        category: 'Home Improvement',
        transactions: [],
      }, {
        amount: 1447.3600000000001,
        category: 'General Merchandise',
        transactions: [],
      }, {
        amount: 2651,
        category: '',
        transactions: [],
      }, {
        amount: 531.07,
        category: 'Other Expenses',
        transactions: [],
      }, {
        amount: 1459.2200000000003,
        category: 'Electronics',
        transactions: [],
      }, {
        amount: 224.57,
        category: 'Clothing/Shoes',
        transactions: [],
      }, {
        amount: 95.43,
        category: 'Groceries',
        transactions: [],
      }, {
        amount: 160.49,
        category: 'Entertainment',
        transactions: [],
      }, {
        amount: 500.08,
        category: 'Uncategorized',
        transactions: [],
      }],
      chart_config: {
        key: 'category',
        value: 'amount',
        radius: {
          inner: 135,
          outter: 150,
          padding: 0.03,
          round: 20,
        },
        color: {
          scheme: 'schemePaired',
        },
        transition: {
          duration: 0,
        },
      },
    };
  },
};
</script>

<style lang="scss">
.chart {
  &__label {
    opacity: 0 !important;
  }

  &__line {
    opacity: 0 !important;
  }
}
</style>
