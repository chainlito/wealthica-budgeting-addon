<template>
  <fragment>
    <tr class="spending-item">
      <td class="spending-item__name-cell">
        <div class="spending-item__name">
          {{ item ? item.category : 'Name' }}
        </div>
        <b-icon
          :icon="expanded ? 'chevron-up' : 'chevron-down'"
          @click="updateExpand"
          class="spending-item__expand-icon"
        />
      </td>
      <td class="spending-item__budget-cell">
        <EditableBudget :amount="item.max_amount.toString()" :onSave="saveBudgetingAmount" />
      </td>
      <td class="spending-item__spent-cell">
        <div class="spending-item__spent">
          {{ formatPrice(item.amount, true) }}
        </div>
      </td>
      <td class="spending-item__saving-cell">
        <div
          class="spending-item__saving"
          :class="item.amount / item.max_amount > 1 ? 'up' : 'down'"
        >
          <div>{{ formatPrice(item.max_amount - item.amount, true) }}</div>
          <div class="spending-item__saving__percent">
            {{ !item.max_amount || item.max_amount === 0
                ? $t('no_budget')
                : `${Math.round(item.amount / item.max_amount * 100)}%` }}
          </div>
        </div>
      </td>
    </tr>
    <fragment v-if="expanded">
      <tr v-for="(transaction, index) in item.transactions" :key="index" class="transaction-item">
        <td><b>{{ formatDate(transaction.date) }}</b></td>
        <td class="transaction-item__type">{{ transaction.type.toUpperCase() }}</td>
        <td>{{ formatPrice(transaction.currency_amount) }}</td>
        <td>{{ transaction.description }}</td>
      </tr>
    </fragment>
  </fragment>
</template>

<script>
import { formatPrice, formatDate } from '@/utils';
import EditableBudget from './EditableBudget.vue';

export default {
  components: {
    EditableBudget,
  },

  props: ['category'],

  data: () => ({
    item: null,
    expanded: false,
  }),

  methods: {
    saveBudgetingAmount(amount) {
      const newData = {
        category: this.category.category,
        max_amount: parseInt(amount, 10),
      };
      this.$store.dispatch('updateBudgetingItem', newData);
      this.item.max_amount = parseInt(amount, 10);
    },
    updateExpand() {
      this.expanded = !this.expanded;
    },
    formatPrice,
    formatDate,
  },

  created() {
    this.item = this.category;
  },
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.spending-item {
  min-height: 4rem;
  height: 4rem;
  border-bottom: 1px solid rgba(0,0,0,.1);
  transition: background 0.2s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;

  &:hover {
    background-color: $lighter-gray;
  }

  &__name {
    white-space: nowrap;
    color: $dark-text-color;
    line-height: 1.2;
    background-color: $light-gray;
    border-radius: 5px;
    padding: 0.5rem 0.9rem;
    display: inline;
    font-size: 1.0rem;
    letter-spacing: 1px;
    color: $dark-text-color;

    @media screen and (max-width: $tablet) {
      font-size: .8666rem;
    }

    &-cell {
      padding-right: 1rem;
    }
  }

  &__spent {
    font-size: .9333rem;
    color: $dark-text-color;

    @media screen and (max-width: $tablet) {
      font-size: .8333rem;
    }

    &-cell {
      padding-right: 1rem;
      width: 15%;
    }
  }

  &__budget {
    &-cell {
      padding-right: 2rem;
      width: 20%;
    }
  }

  &__saving {
    font-size: 0.9333rem;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: $tablet) {
      font-size: .8333rem;

      &-cell {
        min-width: 100px;
      }
    }

    &__percent {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &.up {
      color: $red;
    }

    &.down {
      color: $green;
    }
  }

  &__expand-icon {
    background-color: $light-gray;
    padding: 2px;
    border-radius: 10px;
    margin-left: 1rem;
    cursor: pointer;
  }
}

.transaction-item {
  background-color: $lighter-gray;
  font-size: .8666rem;
  color: $dark-text-color;

  @media screen and (max-width: $tablet) {
    font-size: .7666rem;
  }

  & td {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;

    &:first-child {
      padding-left: 2rem !important;
    }
  }

  &__type {
    padding-left: .5rem;
  }
}
</style>
