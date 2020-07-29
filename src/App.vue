<template>
  <div id="app">
    <span>Hello World</span>
    <div v-if="transactions.length > 0">
      <span> Transactions</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      transactions: 'allTransactions',
    }),
  },
  created() {
    this.$store.dispatch('initAddon');
    // eslint-disable-next-line
    this.$store.dispatch('getTransactionsList', null, { root: true });
  },
};
</script>
