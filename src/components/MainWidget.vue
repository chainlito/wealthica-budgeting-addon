<template>
  <div id="app" class="container glide">
    <SpendingChart :categories="transactions" />
    <div class="container-bottom">
      <SpendingList class="container-bottom__left" />
      <BudgetingItem class="container-bottom__right" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SpendingChart from './spending/SpendingChart.vue';
import SpendingList from './spending/SpendingList.vue';
import BudgetingItem from './budgeting/BudgetingItem.vue';

import 'glidejs/dist/css/glide.core.css';

export default {
  components: {
    SpendingChart,
    SpendingList,
    BudgetingItem,
  },
  computed: {
    ...mapGetters({
      transactions: 'categorizedTransactions',
    }),
  },
  created() {
    this.$store.dispatch('initAddon');
    this.$store.dispatch('getTransactionsList', null, { root: true });
    this.$store.dispatch('categorizeTransactions', null, { root: true });
  },
  data() {
    return {
      chart_data: [
        { amount: 50, description: 'Transaction A', transactions: [] },
        { amount: 50, description: 'Transaction B', transactions: [] },
        { amount: 50, description: 'Transaction C', transactions: [] },
        { amount: 50, description: 'Transaction D', transactions: [] },
        { amount: 50, description: 'Transaction A', transactions: [] },
        { amount: 50, description: 'Transaction B', transactions: [] },
        { amount: 50, description: 'Transaction C', transactions: [] },
        { amount: 50, description: 'Transaction D', transactions: [] },
      ],
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

<style lang="scss">
.container {
  &-bottom {
    display: flex;

    &__left {
      width: 50%;
    }

    &__right {
      width: 50%;
    }
  }
}
</style>
