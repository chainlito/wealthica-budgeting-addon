<template>
  <b-card v-if="categories.length > 0">
    <div class="spending-graph">
      <div class="spending-graph__chart">
        <D3PieChart :config="chart_config" :datum="chart_data"  />
      </div>
      <div class="spending-graph__text">
        <h4>
          You have spent
          <span
            class="spending-graph__text__percent"
            :class="(total_spent / total_budget) < 1 ? 'under' : 'over'"
          >{{ Math.round(total_spent / total_budget * 100) }}%</span>
          of your total budget in this month
        </h4>
        <div class="spending-graph__text__amount-wrapper">
          <span class="spending-graph__text__amount-spent">
            {{ formatPrice(total_spent, true) }}
          </span>
          <small>&nbsp;of</small>&nbsp;&nbsp;
          <span class="spending-graph__text__amount-budget">
            {{ formatPrice(total_budget, true) }}
          </span>
        </div>
        <b-progress
          :value="total_spent"
          :max="total_budget"
          :class="(total_spent / total_budget) < 1 ? 'under' : 'over'"
        />
      </div>
    </div>
  </b-card>
</template>

<script>
import { D3PieChart } from 'vue-d3-charts';
import { formatPrice } from '@/utils';
import { PIE_CHART_CONFIG } from '@/constants';

export default {
  components: {
    D3PieChart,
  },
  props: ['categories'],
  data() {
    return {
      chart_config: PIE_CHART_CONFIG,
      chart_data: [],
      total_spent: 0,
      total_budget: 0,
    };
  },

  methods: {
    updateChartData(value) {
      if (value && value.length > 0) {
        this.chart_data = value;
        this.total_spent = value.reduce((a, b) => a + b.amount, 0);
        this.total_budget = value.reduce((x, y) => x + parseInt(y.max_amount, 10), 0);
      }
    },
    formatPrice,
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
@import '@/styles/variables.scss';

.spending-graph {
  display: flex;
  align-items: center;

  @media screen and (max-width: $desktop) {
    display: block;
  }

  &__chart {
    width: 50%;
    padding: 20px;

    @media screen and (max-width: $desktop) {
      width: 100%;
      padding: 0 20px;
    }
  }

  &__text {
    width: 50%;
    padding: 2rem;
    text-align: center;

    @media screen and (max-width: $desktop) {
      width: 100%;
      padding: 1rem 2rem;
    }

    &__amount {
      &-wrapper {
        margin-top: 2.5rem;
        margin-bottom: 1rem;
      }
      &-spent {
        font-size: 1.2333rem;
      }
      &-budget {
        font-size: 1.2333rem;
        margin-left: .5rem;
      }
    }

    &__percent {
      &.under {
        color: $green;
      }
      &.over {
        color: $red;
      }
    }
  }
}

.chart {
  &__label {
    opacity: 0.7 !important;
  }

  &__line {
    opacity: 0.7 !important;
  }
}

.progress {
  $root: &;
  border-radius: .5rem;
  height: .6rem;

  &.under {
    & #{$root}-bar {
      background-color: $green;
    }
  }

  &.over {
    & #{$root}-bar {
      background-color: $red;
    }
  }
}
</style>
