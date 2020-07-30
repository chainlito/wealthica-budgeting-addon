<template>
  <table>
    <tbody>
      <SpendingItem v-for="(category, index) in categories" :category="category" :key="index">
      </SpendingItem>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import SpendingItem from './SpendingItem.vue';

export default {
  components: {
    SpendingItem,
  },
  computed: {
    ...mapGetters({
      categories: 'categorizedTransactions',
    }),
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">

.categories {
  &__list {
    width: 50%;
  }

  &__wrapper {
    display: flex;
  }
}

.budgeting {
  &__item {
    &__amount {
      font-size: .9333rem;
      color: #484f64;
      text-align: right;
      line-height: 1.2;
      font-weight: 700;
      background-color: #eef1f7;
      border-radius: 2px;
      padding: 5px 9px;
    }
  }
}
</style>
