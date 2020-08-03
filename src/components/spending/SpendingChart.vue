<template>
  <b-card v-if="categories.length > 0">
    <div class="spending-graph">
      <div class="spending-graph__chart">
        <D3PieChart :config="chart_config" :datum="chart_data" />
      </div>
      <div class="spending-graph__text">
        <h3>You have spent {{ total_spent / total_budget }}% of your total budget in this month</h3>
        <span>${{ total_spent }} of ${{ total_budget }}</span>
        <b-progress
          :value="total_spent"
          :max="total_budget"
        />
      </div>
    </div>
  </b-card>
</template>

<script>
import { D3PieChart } from 'vue-d3-charts';

export default {
  components: {
    D3PieChart,
  },
  props: ['categories'],
  data() {
    return {
      chart_config: {
        key: 'category',
        value: 'amount',
        radius: {
          inner: 0,
          outter: 100,
          padding: 0.00,
          round: 0,
        },
        color: {
          scheme: 'schemePaired',
        },
        transition: {
          duration: 0,
        },
      },
      chart_data: [],
      total_spent: 0,
      total_budget: 0,
    };
  },

  methods: {
    updateChartData(value) {
      this.chart_data = value;
      this.total_spent = 100;
      this.total_budget = 1000;
    },
  },

  watch: {
    categories(value) {
      this.updateChartData(value);
    },
  },

  created() {
    this.updateChartData(this.$props.categories);
  },
};
</script>

<style lang="scss">
.spending-graph {
  display: flex;
  align-items: center;

  &__chart {
    width: 50%;
  }

  &__text {
    width: 50%;
    text-align: center;
  }
}

.chart {
  &__label {
    opacity: 0 !important;
  }

  &__line {
    opacity: 0 !important;
  }
}
</style>
