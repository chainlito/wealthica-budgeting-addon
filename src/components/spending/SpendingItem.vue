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
          ${{ Math.round(item.amount * 100) / 100 }}
        </div>
      </td>
      <td class="spending-item__saving-cell">
        <div
          class="spending-item__saving"
          :class="item.amount / item.max_amount > 1 ? 'up' : 'down'"
        >
          <div>${{ Math.round((item.max_amount - item.amount) * 100) / 100 }}</div>
          <div class="spending-item__saving__percent">
            <div>{{ Math.round(item.amount / item.max_amount * 100) }}%</div>
          </div>
        </div>
      </td>
    </tr>
    <fragment v-if="expanded">
      <tr v-for="(transaction, index) in item.transactions" :key="index" class="transaction-item">
        <td><b>{{ formatDate(transaction.date) }}</b></td>
        <td class="transaction-item__type">{{ transaction.type.toUpperCase() }}</td>
        <td>${{ transaction.currency_amount }}</td>
        <td>{{ transaction.description }}</td>
      </tr>
    </fragment>
  </fragment>
</template>

<script>
import moment from 'moment';
import EditableBudget from './EditableBudget.vue';

export default {
  components: {
    EditableBudget,
  },

  props: {
    category: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    item: null,
    expanded: false,
  }),

  methods: {
    saveBudgetingAmount(amount) {
      const newData = {
        category: this.category.category,
        max_amount: amount,
      };
      this.$store.dispatch('updateBudgetingItem', newData);
      this.item.max_amount = amount;
    },
    formatDate(dateStr) {
      return moment(dateStr).format('MMM/DD/YYYY');
    },
    updateExpand() {
      this.expanded = !this.expanded;
    },
  },

  watch: {
    category(value) {
      this.$set(this, 'item', value);
    },
  },

  created() {
    this.item = this.category;
  },
};
</script>

<style lang="scss">
@import '~breakpoint-sass/stylesheets/breakpoint';

.spending-item {
  min-height: 4rem;
  height: 4rem;
  border-bottom: 1px solid rgba(0,0,0,.1);
  transition: background 0.2s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;

  &:hover {
    background-color: #F2F7F9;
  }

  &__name {
    white-space: nowrap;
    font-size: .9333rem;
    color: #484f64;
    line-height: 1.2;
    background-color: #eef1f7;
    border-radius: 5px;
    padding: 0.5rem 0.9rem;
    display: inline;
    font-size: 1.0rem;
    letter-spacing: 1px;
    color: #535353;

    &-cell {
      padding-right: 1rem;
    }
  }

  &__spent {
    font-size: .9333rem;
    color: #484f64;

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

  &__progress {
    @include breakpoint(0 768px) {
      display: none;
    }

    &-cell {
      width: 30%;
      padding-right: 0.5rem;
    }
  }

  &__saving {
    font-size: 0.9333rem;
    display: flex;
    justify-content: space-between;

    &__percent {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &.up {
      color: #fe2700;
    }

    &.down {
      color: #2ec623;
    }
  }

  &__expand-icon {
    background-color: #eef1f7;
    padding: 2px;
    border-radius: 10px;
    margin-left: 1rem;
    cursor: pointer;
  }
}

.transaction-item {
  background-color: #F2F7F9;
  font-size: .8666rem;
  color: #484f64;

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

.k-progress {
  margin-bottom: 0;
  margin-right: 0;

  &-outer {
    margin-right: 0;
    padding-right: 0;
  }
}
</style>
