<template>
  <div>
    <div class="budgeting-editable__text" @click="handleInputEditable" v-show="!active">
      <div>${{ text }}</div>
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
  },
};
</script>

<style lang="scss">

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
    color: #484f64;
    cursor: text;

    &:hover {
      border: 1px solid #D7DBEC;

      & #{$icon}-icon {
        display: inline-block !important;
      }
    }

    #{$icon}-icon {
      color: #D7DBEC;
      display: none !important;
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
    color: white;
    cursor: pointer;

    &.ok {
      background-color: #2ec623;
    }

    &.cancel {
      background-color: #fe2700;
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
    border: 1px solid #d7dbec;
    background-color: #fff;
    color: #484f64;
    outline: 0;
    border-radius: 3px;
  }
}
</style>
