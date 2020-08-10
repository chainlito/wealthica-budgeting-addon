<template>
  <div>
    <div class="budgeting-editable__text" @click="handleInputEditable" v-show="!active">
      <div>{{ formatPrice(text) }}</div>
      <b-icon icon="pencil" class="budgeting-editable__text-icon" />
    </div>
    <div v-show="active" class="budgeting-editable__form">
      <input class="budgeting-editable__input" v-model="text" />
      <button @click="handleSave" class="budgeting-editable__button ok">
        <b-icon icon="check2" style="width: 16px; height: 16px" />
      </button>
      <button @click="handleInputEditable" class="budgeting-editable__button cancel">
        <b-icon icon="x" style="width: 16px; height: 16px" />
      </button>
    </div>
  </div>
</template>

<script>
import { formatPrice } from '@/utils';

export default {
  props: {
    amount: {
      type: String,
      required: true,
    },
    onSave: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      active: false,
      text: this.amount.toString(),
    };
  },
  methods: {
    handleInputEditable() {
      this.active = !this.active;
    },
    handleSave() {
      this.onSave(this.text);
      this.handleInputEditable();
    },
    formatPrice,
  },
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.budgeting-editable {

  &__text {
    $icon: &;

    background-color: transparent;
    border-radius: 3px;
    border: 1px solid transparent;
    padding: 0px .5rem;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 36px;
    font-size: .9333rem;
    text-transform: none;
    color: $dark-text-color;
    cursor: text;

    @media screen and (max-width: $tablet) {
      font-size: .8333rem;
    }

    &:hover {
      border: 1px solid $dark-border-color;

      & #{$icon}-icon {
        display: inline-block !important;
      }
    }

    #{$icon}-icon {
      color: $dark-border-color;
      display: inline-block !important;
      cursor: pointer;
    }
  }

  &__form {
    display: flex;
    align-items: center;
  }

  &__button {
    margin-left: .4rem;
    padding: 0 2px;
    height: 20px;
    border: none;
    border-radius: 3px;
    color: $white;
    cursor: pointer;

    &.ok {
      background-color: $green;
    }

    &.cancel {
      background-color: $red;
    }
  }

  &__input {
    padding-left: .5rem;
    padding-right: .5rem;
    max-width: 150px;
    box-sizing: border-box;
    height: 36px;
    line-height: 36px;
    font-size: .9333rem;
    text-transform: none;
    border: 1px solid $dark-border-color;
    background-color: $white;
    color: $dark-text-color;
    outline: 0;
    border-radius: 3px;

    @media screen and (max-width: $tablet) {
      max-width: 100px;
      font-size: .8333rem;
    }
  }
}
</style>
