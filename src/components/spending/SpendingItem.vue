<template>
  <tr class="spending-item">
    <td class="spending-item__name-cell">
      <div class="spending-item__name">{{ item ? item.category : 'Name' }}</div>
    </td>
    <td class="spending-item__spent-cell">
      <div class="spending-item__spent">
        $ {{ Math.round(item.amount * 100) / 100 }}
      </div>
    </td>
    <td class="spending-item__budget-cell">
      <EditableButton :amount="item.max_amount.toString()" :onSave="saveBudgetingAmount" />
    </td>
    <td class="spending-item__saving-cell">
      <div
        class="spending-item__saving"
        :class="item.amount / item.max_amount > 1 ? 'up' : 'down'"
      >
        <div>${{ Math.round((item.max_amount - item.amount) * 100) / 100 }}</div>
        <div class="spending-item__saving__percent">
          <b-icon icon="caret-up-fill"></b-icon>
          <div>{{ Math.round(item.amount / item.max_amount * 100) }}%</div>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
import EditableButton from '../Button.vue';

export default {
  components: {
    EditableButton,
  },

  props: {
    category: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    item: null,
  }),

  methods: {
    saveBudgetingAmount(amount) {
      const newData = {
        category: this.category.category,
        max_amount: amount,
      };
      this.$store.dispatch('updateBudgetingItem', newData);
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
    background-color: #F2F2FE;
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
      padding-left: 0.5rem;
    }
  }

  &__spent {
    font-size: .9333rem;
    color: #484f64;

    &-cell {
      padding-right: 1rem;
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

    &-cell {
      padding-right: 1rem;
    }
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
